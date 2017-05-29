import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

// import debounce from 'lodash.debounce';

import Tooltip from './Tooltip';

import jss, { variables, colors } from '../JSS';

const styles = {
    inputContainer: {
        display: 'flex',
        flex: '1 1 auto',
        position: 'relative',
        alignSelf: 'stretch',
        width: '0%',
        minHeight: '40px',
    },
    columnInputContainer: {
        display: 'flex',
        flex: '0 0 40px',
        position: 'relative',
        alignSelf: 'stretch',
    },
    input: {
        background: variables.input.background,
        border: 'none',
        padding: '4px 8px',
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        flex: '1 1 auto',
        '&:hover': {
            background: variables.input.hover.background,
        },
        '&:focus': {
            background: variables.input.focus.background,
            cursor: 'text'
        },
        '&[readonly], &[disabled]': {
            '&:hover': {
                background: 'none',
                cursor: 'default'
            },
            '&:focus': {
                background: 'none',
                cursor: 'default'
            },
        }
    },
    right: {
        textAlign: 'right'
    },
    center: {
        paddingLeft: '0px',
        paddingRight: '0px',
        textAlign: 'center'
    },
    noPadding: {
        padding: '0px',
    },
    rounded: {
        borderRadius: '3px',
    },
    rightAlignError: {
        paddingRight: '33px',
    },
    errorNotificationContainer: {
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        right: '4px',
        display: 'flex',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'relative',
    },
    circleIcon: {
        color: variables.colors.primary,
    },
    errorIcon: {
        color: 'white',
        zIndex: '1',
        position: 'absolute',
        fontSize: '16px',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

const { classes } = jss.createStyleSheet(styles).attach()

function defaultOnChange() {}

class Input extends React.Component {

    static defaultProps = {
        element: 'input',
        type: 'text',
        minLength: 0,
        debounceTimeout: 100,
        forceNotifyByEnter: false,
        forceNotifyOnBlur: false,
        onChange: defaultOnChange
    };

    static propTypes = {
        alignText: React.PropTypes.string, // left (default), center, right
        column: React.PropTypes.bool,
        className: React.PropTypes.string,
        error: React.PropTypes.array,
        type: React.PropTypes.string,
        onChange: React.PropTypes.func,
        onKeyDown: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        focusOnMount: React.PropTypes.bool,
        selectAllOnMount: React.PropTypes.bool,
        minLength: React.PropTypes.number,
        debounceTimeout: React.PropTypes.number,
        forceNotifyByEnter: React.PropTypes.bool,
        forceNotifyOnBlur: React.PropTypes.bool,
        noPadding: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        isValid: React.PropTypes.func,
        inputFilter: React.PropTypes.func, // All entered input will be put through this function
    };

    constructor(props) {
        super(props);

        this.createNotifier = this.createNotifier.bind(this);
        this.forceNotify = this.forceNotify.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getValue = this.getValue.bind(this);
        this.clear = this.clear.bind(this);

        this.state = {
            value: this.props.value || ''
        }
    }

    componentWillMount() {
        this.createNotifier(this.props.debounceTimeout);
    }

    componentDidMount() {
        if (this.props.focusOnMount) {
            this.refs.input.focus();

            if (this.props.selectAllOnMount) {
                var node = ReactDOM.findDOMNode(this.refs.input);
                node.setSelectionRange(0, node.value.length)
            }
        }
    }

    componentWillReceiveProps({value, debounceTimeout}) {
        if (typeof value !== 'undefined' && this.state.value !== value) {
            this.setState({value});
        }
        if (debounceTimeout !== this.props.debounceTimeout) {
            this.createNotifier(debounceTimeout);
        }
    }


    shouldComponentUpdate() {
        if (this.notify.cancel) {
            this.notify.cancel();
        }

        return true;
    }

    componentWillUnmount() {
        if (this.notify.cancel) {
            this.notify.cancel();
        }
    }

    getValue() {
        return this.refs.input.value;
    }

    clear() {
        this.setState({value: ''});
    }

    createNotifier(debounceTimeout) {
        if (debounceTimeout < 0) {
            this.notify = () => null;
        } else {
            
        // } else if (debounceTimeout === 0) {
            this.notify = this.props.onChange;
        }
        // } else {
        //     this.notify = debounce(this.props.onChange, debounceTimeout);
        // }
    }


    forceNotify(event) {
        if (this.notify.cancel) {
            this.notify.cancel();
        }

        const {value} = this.state;
        const {minLength, onChange} = this.props;

        if (value.length >= minLength) {
            onChange(event);
        } else {
            onChange({...event, target: {...event.target, value}});
        }
    }


    onChange(event) {
        event.persist();

        let oldValue = this.state.value;
        let newValue = event.target.value || '';

        if (newValue && this.props.inputFilter) {
            newValue = this.props.inputFilter(newValue);
        }

        if (!this.props.isValid || (this.props.isValid && this.props.isValid(newValue))) {
            this.setState({value: newValue}, () => {
                const {value} = this.state;

                if (value.length >= this.props.minLength) {
                    this.notify(event);
                    return;
                }

                // If user hits backspace and goes below minLength consider it cleaning the value
                if (oldValue.length > value.length) {
                    this.notify({...event, target: {...event.target, value: ''}});
                }
            });
        }
    }

    render() {
        const {
            element,
            error,
            onChange: _onChange,
            value: _value,
            minLength: _minLength,
            debounceTimeout: _debounceTimeout,
            focusOnMount,
            selectAllOnMount,
            forceNotifyByEnter,
            forceNotifyOnBlur,
            alignText,
            noPadding,
            light,
            rounded,
            showOnDark,
            column,
            ...props
        } = this.props;

        const onKeyDown = forceNotifyByEnter ? {
            onKeyDown: event => {
                if (event.key === 'Enter') {
                    this.forceNotify(event);
                }
                // Invoke original onKeyDown if present
                if (this.props.onKeyDown) {
                    this.props.onKeyDown(event);
                }
            }
        } : {};

        const onBlur = forceNotifyOnBlur ? {
            onBlur: event => {
                this.forceNotify(event);
                // Invoke original onBlur if present
                if (this.props.onBlur) {
                    this.props.onBlur(event);
                }
            }
        } : {};

        var className = classNames({
            [classes.input]: true,
            [classes[alignText]]: alignText,
            [classes.rightAlignError]: alignText == 'right' && this.props.error,
            [classes.noPadding]: noPadding,
            [classes.rounded]: rounded
        })

        let containerClassName = classNames({
            [this.props.className]: true,
            [classes.inputContainer]: !this.props.column,
            [classes.columnInputContainer]: this.props.column,
        })

        let errorNotification

        if (this.props.error) {
            errorNotification = 
                <div className={classes.errorNotificationContainer}>
                    <Tooltip body={this.props.error} className={classes.iconContainer}>
                        <div className={`material-icons ${classes.circleIcon}`}>
                            lens
                        </div>
                        <div className={`material-icons ${classes.errorIcon}`}>
                            priority_high
                        </div>
                    </Tooltip>
                </div>
        }

        return (
            <div className={containerClassName}>
                <input {...props} onInput={this.onChange} value={this.state.value} {...onKeyDown} {...onBlur} className={className} ref='input'>
                </input>
                {errorNotification}
            </div>
        )
    }
}

export default Input
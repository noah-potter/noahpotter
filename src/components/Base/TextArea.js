import React from 'react';

import Textarea from 'react-textarea-autosize';
import debounce from 'lodash.debounce';
import classNames from 'classnames';

import jss, { variables } from '../JSS';

const styles = {
    textarea: {
        background: 'none',
        border: 'none',
        resize: 'none',
        overflow: 'hidden',
        display: 'flex',
        flex: '1 1 auto',
        minHeight: '40px',
        outline: 'none',
        padding: '10px 8px',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.04)',
            cursor: 'pointer',
        },
        '&:focus': {
            background: 'rgba(255, 255, 255, 0.12)',
            cursor: 'text',
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
    visibleBackgroundTextarea: {
        extend: 'textarea',
        background: 'rgba(255, 255, 255, 0.06)',
    },
    // TODO: when jss-extend is fixed, extend lightTextare with textarea instead of copying
    lightTextarea: {
        extend: 'textarea',
        background: variables.input.light.background,
        '&:hover': {
            background: variables.input.light.hover.background,
            cursor: 'pointer',
        },
        '&:focus': {
            background: variables.input.light.focus.background,
            cursor: 'text',

        },
    },
    visibleBackgroundLightTextarea: {
        extend: 'lightTextarea',
    },
    showOnDark: {
        background: variables.input.background,
    },
}

const { classes } = jss.createStyleSheet(styles).attach()

function defaultOnChange() {}

class TextArea extends React.Component {

    static defaultProps = {
        element: 'input',
        type: 'text',
        minLength: 0,
        debounceTimeout: 100,
        forceNotifyByEnter: false,
        forceNotifyOnBlur: false,
        onChange: defaultOnChange,
    };

    static propTypes = {
        input: React.PropTypes.bool, // Tries to make the textarea behave like an input
        visibleBackground: React.PropTypes.bool, // This determines if there should be a background in default state
        light: React.PropTypes.bool,
        showOnDark: React.PropTypes.bool,
        alignText: React.PropTypes.string, // left (default), middle, right

        type: React.PropTypes.string,
        onChange: React.PropTypes.func,
        onKeyDown: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        focusOnMount: React.PropTypes.bool,
        minLength: React.PropTypes.number,
        debounceTimeout: React.PropTypes.number,
        forceNotifyByEnter: React.PropTypes.bool,
        forceNotifyOnBlur: React.PropTypes.bool,
        inputFilter: React.PropTypes.func, // All entered input will be put through this function
    };

    constructor(props) {
        super(props);

        this.createNotifier = this.createNotifier.bind(this);
        this.forceNotify = this.forceNotify.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            value: this.props.value || ''
        }
    }

  componentWillMount() {
    this.createNotifier(this.props.debounceTimeout);
  }

  componentWillReceiveProps({value, debounceTimeout}) {
    if (typeof value !== 'undefined' && this.state.value !== value) {
      this.setState({value});
    }
    if (debounceTimeout !== this.props.debounceTimeout) {
      this.createNotifier(debounceTimeout);
    }
  }
  
  componentDidMount() {
    if (this.props.focusOnMount) {
      this.refs.textarea.focus();
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


  createNotifier(debounceTimeout) {
    if (debounceTimeout < 0) {
      this.notify = () => null;
    } else if (debounceTimeout === 0) {
      this.notify = this.props.onChange;
    } else {
      this.notify = debounce(this.props.onChange, debounceTimeout);
    }
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

    clear() {
        this.setState({value: ''});
    }


    getValue() {
        return this.refs.textarea.value
    }

    render() {

        const {
            element,
            onChange: _onChange,
            value: _value,
            minLength: _minLength,
            debounceTimeout: _debounceTimeout,
            forceNotifyByEnter,
            forceNotifyOnBlur,
            alignText,
            input,
            light,
            focusOnMount,
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
        
        let className = classNames({
            [classes.textarea]: !this.props.light && !this.props.visibleBackground,
            [classes.lightTextarea]: this.props.light && !this.props.visibleBackground,
            [classes.visibleBackgroundTextarea]: !this.props.light && this.props.visibleBackground,
            [classes.visibleBackgroundLightTextarea]: this.props.light && this.props.visibleBackground,
            [classes.showOnDark]: this.props.showOnDark,
        })

        return (
            <Textarea {...props} onInput={this.onChange} value={this.state.value} {...onKeyDown} {...onBlur} ref='textarea' className={className}></Textarea>
        )
    }
}

export default TextArea
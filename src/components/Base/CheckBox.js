import React from 'react';
import classNames from 'classnames';

// Components

// Styles
import jss, { variables } from '../jss';

const styles = {
    container: {
        height: '24px',
        width: '24px',
        position: 'relative',
    },
    checkbox: {
        display: 'inline-block',
        color: variables.checkbox.uncheckedColor,
        fill: variables.checkbox.checkedColor,
        height: '24px',
        width: '24px',
        transition: 'opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms',
        position: 'absolute',
        opacity: '0',
        transform: 'scale(0)',
        '-webkit-user-select': 'none'
    },
    checkboxOutline: {
        display: 'inline-block',
        color: variables.checkbox.uncheckedColor,
        fill: variables.checkbox.uncheckedColor,
        height: '24px',
        width: '24px',
        transition: 'opacity 1000ms cubic-bezier(0.23, 1, 0.32, 1) 200ms',
        position: 'absolute',
        opacity: '1',
        '-webkit-user-select': 'none'
    },
    selectedCheckbox: {
        extend: 'checkbox',
        transition: 'opacity 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 800ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        opacity: '1',
        transform: 'scale(1)',
    },
    selectedCheckboxOutline: {
        extend: 'checkboxOutline',
        fill: variables.checkbox.checkedColor,
        transition: 'opacity 650ms cubic-bezier(0.23, 1, 0.32, 1) 150ms',
        opacity: '0',
    },
    disabled: {
        fill: variables.checkbox.disabledColor,
    },
}

const { classes } = jss.createStyleSheet(styles).attach()

class CheckBox extends React.Component {

    static defaultProps = {
    };

    static propTypes = {
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
    };

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        let checkboxClass = classNames({
            [classes.selectedCheckbox]: this.props.checked,
            [classes.checkbox]: !this.props.checked,
            [classes.disabled]: this.props.disabled,
        })

        let checkboxOutlineClass = classNames({
            [classes.selectedCheckboxOutline]: this.props.checked,
            [classes.checkboxOutline]: !this.props.checked,
            [classes.disabled]: this.props.disabled,
        })

        return (
            <div className={classes.container}>
                <svg viewBox="0 0 24 24" className={checkboxClass}>
                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
                <svg viewBox="0 0 24 24" className={checkboxOutlineClass}>
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                </svg>
            </div>
        )
    }
}

export default CheckBox

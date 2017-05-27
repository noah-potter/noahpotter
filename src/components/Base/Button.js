import React from 'react';

import jss, { variables } from '../JSS';
import Tooltip from './Tooltip';

/*
    Button styles:
    <flat/raised/plain>_<light/dark>_<default/success/primary>
    
*/

const styles = {
    button: {
        border: 'none',
        borderRadius: '3px',
        padding: '8px',
        minWidth: '75px',
        margin: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        cursor: 'pointer',
        lineHeight: '16px',
        fontSize: '16px',
        whiteSpace: 'pre-wrap',
        userSelect: 'none',
    },
    // Bases
    plain_base: {
        extend: 'button',
    },
    flat_dark_base: {
        extend: 'button',
        '&:hover:not([disabled])': {
            background: variables.button.dark.flat.hover.background
        },
        '&:active:not([disabled])': {
            background: variables.button.dark.flat.active.background
        },
        '&[disabled]': {
            color: variables.button.dark.flat.disabled.color,
            cursor: 'default',
            fontWeight: 'bold' 
        }
    },
    flat_light_base: {
        extend: 'button',
        '&:hover:not([disabled])': {
            background: variables.button.light.flat.hover.background
        },
        '&:active:not([disabled])': {
            background: variables.button.light.flat.active.background
        },
        '&[disabled]': {
            color: variables.button.light.flat.disabled.color,
            cursor: 'default',
            fontWeight: 'bold' 
        }
    },
    active: {

    },
    unactive: {

    },

    // Use these
    // Plain Light
    plain_light_primary: {
        extend: 'plain_base',
        color: variables.button.light.plain.primary.color
    },
    plain_light_default: {
        extend: 'plain_base',
        color: variables.button.light.plain.default.color
    },
    plain_light_success: {
        extend: 'plain_base',
        color: variables.button.light.plain.success.color
    },
    // Plain Dark
    plain_dark_primary: {
        extend: 'plain_light_primary',
    },
    plain_dark_default: {
        extend: 'plain_light_default',
    },
    plain_dark_success: {
        extend: 'plain_light_success',
    },

    // Flat Dark
    flat_dark_primary: {
        extend: 'flat_dark_base',
        color: variables.button.dark.flat.primary.color
    },
    flat_dark_default: {
        extend: 'flat_dark_base',
        color: variables.button.dark.flat.default.color
    },
    flat_dark_success: {
        extend: 'flat_dark_base',
        color: variables.button.dark.flat.success.color
    },

    // Flat Light
    flat_light_primary: {
        extend: 'flat_light_base',
        color: variables.button.light.flat.primary.color
    },
    flat_light_default: {
        extend: 'flat_light_base',
        color: variables.button.light.flat.default.color
    },
    flat_light_success: {
        extend: 'flat_light_base',
        color: variables.button.light.flat.success.color
    },

    // Raised Dark
    raised_dark_primary: {
        extend: 'button',
        background: variables.colors.primary.main,
        color: variables.textWhite,
        boxShadow: variables.buttonBoxShadow,
        '&:hover:not([disabled])': {
            background: variables.colors.primary.hover
        },
        '&:active:not([disabled])': {
            background: variables.colors.primary.active
        },
        '&$active': {
            // background: variables.colors.primary.shadow,
        },
        '&$unactive': {
            background: variables.colors.primary.shadow,
        },
        '&[disabled]': {
            background: variables.colors.primary.shadow,
            color: variables.colors.primary.disabled,
            cursor: 'default',
            fontWeight: 'bold' 
        }
    },
    raised_dark_default: {
        extend: 'button',
        background: variables.colors.default.main,
        boxShadow: variables.buttonBoxShadow,
        color: variables.textBlack,
        '&:hover:not([disabled])': {
            background: variables.colors.default.hover
        },
        '&:active:not([disabled])': {
            background: variables.colors.default.active
        },
        '&[disabled]': {
            background: variables.colors.default.shadow,
            cursor: 'default',
            fontWeight: 'bold' 
        }
    },
    raised_dark_success: {
        extend: 'button',
        background: variables.colors.success.main,
        boxShadow: variables.buttonBoxShadow,
        color: variables.textWhite,
        '&:hover:not([disabled])': {
            background: variables.colors.success.hover
        },
        '&:active:not([disabled])': {
            background: variables.colors.success.active
        },
        '&[disabled]': {
            background: variables.colors.success.shadow,
            cursor: 'default',
            fontWeight: 'bold' 
        }
    },
    // Raised Light
    raised_light_primary: {
        extend: 'raised_dark_primary',
        color: 'white'
    },
    raised_light_default: {
        extend: 'raised_dark_default',
    },
    raised_light_success: {
        extend: 'raised_dark_success',
    },
    //  Button group 
    combinedButtonGroupButton: {
        extend: 'button',
        margin: '0px',
        borderRadius: '0px',
        boxShadow: 'none',
        minWidth: '0px',
        borderRight: variables.button.group.border,
    },
    buttonGroupButton: {
        extend: 'button',
        margin: '0px',
        marginRight: '8px',
        boxShadow: 'none',
        '&:last-child': {
            marginRight: '0px'
        }
    },
    verticalButtonGroupButton: {
        extend: 'button',
        margin: '0px',
        marginBottom: '8px',
        boxShadow: 'none',
        '&:last-child': {
            marginBottom: '0px'
        }
    },
    expandButton: {
        flex: '1 1 auto'
    },
    noPadding: {
        padding: '0px' ,
        minWidth: '0px',
    },
    noMinWidth: {
        minWidth: '0px'
    },
    noMargin: {
        margin: '0px' 
    },
    centerVertically: {
        alignSelf: 'center'
    },
    flushleft: {
        marginLeft: '0px',
    },
    flushright: {
        marginRight: '0px',
    },
    flushtop: {
        marginTop: '0px',
    },
    flushbottom: {
        marginBottom: '0px',
    },
    noBorderRadius: {
        borderRadius: '0px',
    },
    fab: {
        borderRadius: '50%',
    },
}

const { classes } = jss.createStyleSheet(styles).attach()

class Button extends React.Component {

    static defaultProps = {
        closeOnClick: true
    };

    static propTypes = {
        label: React.PropTypes.string,
        combine: React.PropTypes.bool,
        buttonGroupButton: React.PropTypes.bool,
        vertical: React.PropTypes.bool, // If vertical and in button group, removes top margin
        expand: React.PropTypes.bool,
        padding: React.PropTypes.number, // How much padding in pixels to apply
        noPadding: React.PropTypes.bool,
        margin: React.PropTypes.number, // How much margin in pixels to apply
        noMargin: React.PropTypes.bool,
        noMinWidth: React.PropTypes.bool,
        centerVertically: React.PropTypes.bool,

        default: React.PropTypes.bool, // Default
        primary: React.PropTypes.bool,
        success: React.PropTypes.bool,

        active: React.PropTypes.bool,
        unactive: React.PropTypes.bool,

        noBorderRadius: React.PropTypes.bool,

        dark: React.PropTypes.bool, // Default
        light: React.PropTypes.bool, // Toggles the light theme version of the button

        flat: React.PropTypes.bool, // Default
        raised: React.PropTypes.bool,
        plain: React.PropTypes.bool, // Modifier like raised, doesn't have a background
        popoverText: React.PropTypes.node,
        preferPlace: React.PropTypes.string,
        closeOnClick: React.PropTypes.bool,
        flush: React.PropTypes.oneOfType([
                React.PropTypes.array,
                React.PropTypes.string
            ]),
        disabled: React.PropTypes.bool,
        popoverClassName: React.PropTypes.string,
        fab: React.PropTypes.bool, // floating action button. it's a round button
    };

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.state = {
            isOpen: false
        }
    }

    onClick(e) {
        e.target.blur();
        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick(e);
        }

        if (!this.props.closeOnClick) {
            e.stopPropagation();
        }
    }

    onMouseEnter() {
        this.setState({isOpen: true})
    }

    onMouseLeave() {
        this.setState({isOpen: false})
    }

    render() {

        var { disabled, allowManualToggle } = this.props;

        var className = this.props.className || '';
        var base = '';

        if (this.props.raised) {
            base = 'raised';
        } else if (this.props.plain) {
            base = 'plain'
        } else {
            base = 'flat'
        }

        if (this.props.light) {
            base += '_light';
        } else {
            base += '_dark';
        }

        if (this.props.primary) {
            base += '_primary'
        } else if (this.props.success) {
            base += '_success'
        } else {
            base += '_default'
        }

        className += ` ${classes[base]}`;

        if (this.props.combine) {
            className += ` ${classes.combinedButtonGroupButton}`
        } else if (this.props.buttonGroupButton) {
            if (this.props.vertical) {
                className += ` ${classes.verticalButtonGroupButton}`
            } else {
                className += ` ${classes.buttonGroupButton}`
            }
        }

        if (this.props.expand) {
            className += ` ${classes.expandButton}`
        }

        if (this.props.noPadding) {
            className += ` ${classes.noPadding}`
        } else if (this.props.padding == '4') {
            className += ` ${classes.padding_4}`
        }

        if (this.props.noMargin) {
            className += ` ${classes.noMargin}`
        }

        if (this.props.noMinWidth || this.props.fab) {
            className += ` ${classes.noMinWidth}`
        }

        if (this.props.centerVertically) {
            className += ` ${classes.centerVertically}`
        }

        if (this.props.noBorderRadius) {
            className += ` ${classes.noBorderRadius}`
        }

        if (this.props.active) {
            className += ` ${classes.active}`
        }

        if (this.props.unactive) {
            className += ` ${classes.unactive}`
        }

        if (this.props.fab) {
            className += ` ${classes.fab}`
        }

        if (this.props.flush) {
            if (this.props.flush instanceof Array) {
                this.props.flush.forEach(flush => {
                    className += ` ${classes['flush' + flush]}`;
                })
            } else {
                className += ` ${classes['flush' + this.props.flush]}`
            }
        }

        var style = {}

        if (this.props.padding) {
            style['padding'] = `${this.props.padding}px`
        }

        if (this.props.margin) {
            style['margin'] = `${this.props.margin}px`
        }

        var button = 
            <div className={className} style={style} disabled={disabled} onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                {this.props.children}
            </div>

        if (this.props.popoverText) {
            button = 
                <Tooltip preferPlace={this.props.preferPlace || 'bottom'} body={this.props.popoverText} className={this.props.popoverClassName} allowManualToggle={false} controlledOpen={true} isOpen={this.state.isOpen}>
                    {button}
                </Tooltip>
        }

        return button
    }
}

export default Button;
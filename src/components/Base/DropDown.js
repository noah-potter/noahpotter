import React from 'react';
import Portal from 'react-portal-children';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import DropDownItems from './DropDownItems';
import Tooltip from './Tooltip';

import jss, { colors, variables } from '../JSS';

const styles = {
    dropDown: {
        display: 'flex',
        flex: '1 1 auto',
        alignSelf: 'stretch'
    },
    dropDownMenuContainer: {
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'stretch',
        position: 'relative'
    },
    label: {
        marginLeft: '4px',
        paddingRight: '4px',
        lineHeight: '12px',
    },
    darkLabel: {
        color: variables.labelColor
    },
    labelPlaceholder: {
        extend: 'label',
        color: variables.labelColor
    },
    clickBox: {
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
    },
    notInsideButtonClickBox: {
        extend: 'clickBox',
        cursor: 'pointer',
        justifyContent: 'flex-end',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
        },
        '&:focus': {
            background: 'rgba(255, 255, 255, 0.12)',
            cursor: 'text'
        },
        '&[readonly], &[disabled]': {
            cursor: 'default',
            '&:hover': {
                background: 'none',
            },
            '&:focus': {
                background: 'none',
            },
        }
    },
    lightNotInsideButtonClickBox: {
        extend: 'notInsideButtonClickBox',
        background: variables.input.light.background,
        '&:hover': {
            background: variables.input.light.hover.background,
        },
        '&:focus': {
            background: variables.input.light.focus.background,
            cursor: 'text'
        },
    },
    hideLightBackground: {
        background: 'none',
    },
    outlineHover: {
        border: '1px solid transparent',
        '&:hover': {
            background: colors.blue600.clone().clearer(0.8).rgbString(),
            border: `1px solid ${colors.blue500.rgbString()}`,
            color: colors.blue500.rgbString(),
        },
        '&:focus': {
            background: colors.blue600.clone().clearer(0.8).rgbString(),
            border: `1px solid ${colors.blue600.rgbString()}`
        },
    },
    clickBoxLeft: {
        justifyContent: 'flex-start',
        paddingLeft: '3px',
    },
    padding_4: {
        padding: '4px',
    },
    rightAlignPadding: {
        paddingRight: '33px',
    },
    roundedBorder: {
        borderRadius: '3px',
    },
	expandedLabel: {
        flex: '1 1 auto',
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
    visibleBackground: {
        background: variables.input.light.background,
    },
    noHover: {
        '&:hover': {
            background: 'none',
        }
    },
    disabled: {
        
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

class DropDown extends React.Component {

    static propTypes = {
        arrowClassName: React.PropTypes.string,
        rawLabel: React.PropTypes.bool, // Set true if you don't want the label wrapped in a formatted container
        className: React.PropTypes.string,
        labelClassName: React.PropTypes.string,
        label: React.PropTypes.node,
        rightLabel: React.PropTypes.node,
        darkLabel: React.PropTypes.bool,
        labelIsPlaceholder: React.PropTypes.bool, // If true, turns label slightly darker
        renderItems: React.PropTypes.func,
        alignLeft: React.PropTypes.bool,
        horizontal: React.PropTypes.string,
        vertical: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        staticHeader: React.PropTypes.element,
        staticFooter: React.PropTypes.element,
        insideButton: React.PropTypes.bool,
        onClose: React.PropTypes.func,
        onOpen: React.PropTypes.func, // If true, dont' allow scrolling
        padding: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.number]),
        childPortals: React.PropTypes.array, // Array of strings that list the child portal ids
        id: React.PropTypes.string, // Id for the child portal
        light: React.PropTypes.bool, // If on a light background
        hideLightBackground: React.PropTypes.bool, // If true, we don't show a background when not hovering
        fullHeight: React.PropTypes.bool, // If true, dont' allow scrolling
        onOpen: React.PropTypes.func,
        hideArrow: React.PropTypes.bool,
        roundedBorder: React.PropTypes.bool,
        outlineHover: React.PropTypes.bool,
        labelTopPadding: React.PropTypes.number,
        rightAlignArrow: React.PropTypes.bool,
        error: React.PropTypes.string,
        noHover: React.PropTypes.bool,
        centerOnMouseX: React.PropTypes.bool,
        // manuallyControl: React.PropTypes.bool, // Allows 
        // isOpen: React.PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.updateItemsPosition = this.updateItemsPosition.bind(this);
        this.closePortal = this.closePortal.bind(this);

        this.state = {
            mouseX: null
        }
    }

    componentDidMount() {
        this.updateItemsPosition();
    }

    componentDidUpdate() {
        this.updateItemsPosition();
    }

    updateItemsPosition() {
        if (this.refs.items && this.refs.dropDown) {
            var rect = ReactDOM.findDOMNode(this.refs.dropDown).getBoundingClientRect();

            if (this.props.centerOnMouseX) {
                rect.mouseX = this.state.mouseX
            }

            this.refs.items.setPosition(rect);
        }
    }

    onOpen(el, e) {
        if (this.props.onOpen) {
            this.props.onOpen();
        }

        let mouseX

        if (this.props.centerOnMouseX) {
            mouseX = e.clientX
        }

        this.setState({
            mouseX
        }, this.updateItemsPosition)
    }

    closePortal(e) {
        let portal = this.refs.portal
        // Not sure why it needs to be in a timeOut, but it does
        setTimeout(() => {
            portal.closePortal()
        })
    }

    onClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {

        // Background allows the user to click off the element to close
        var isOpen = this.state.open // || (this.props.manuallyControl && this.props.isOpen)

        var dropDownItems = null;

        var children = this.props.children;

        if (this.props.renderItems) {
            children = this.props.renderItems();
        }

        dropDownItems =
            <DropDownItems 
                scrollIntoView 
                ref='items' 
                fullHeight={this.props.fullHeight} 
                vertical={this.props.vertical} 
                horizontal={this.props.horizontal} 
                isOpen 
                onClose={this.onClose} 
                closeThePortal={this.closePortal} 
                staticHeader={this.props.staticHeader} 
                staticFooter={this.props.staticFooter} 
                offLabel={this.props.offLabel} 
                noBorder={this.props.noBorder}
                noBorderRadius={this.props.noBorderRadius}
                inDialog={this.props.inDialog}
                noBackground={this.props.noBackground}
                borderRadius={this.props.borderRadius}
                centerOnMouseX={this.props.centerOnMouseX}
            >
                {children}
            </DropDownItems>

        var labelClassName = classes.label;
        if (this.props.labelIsPlaceholder || this.props.darkLabel) {
            labelClassName = classes.labelPlaceholder
        }

        if (this.props.rightAlignArrow) {
            labelClassName += ` ${classes.expandedLabel}`
        }

        labelClassName += ` ${this.props.labelClassName}`

        let labelStyle = {}
        let arrowStyle = {}

        if (this.props.labelTopPadding) {
            labelStyle.marginTop = `${this.props.labelTopPadding}px`
            arrowStyle.marginTop = `${this.props.labelTopPadding}px`
        }

        var clickBoxClassName = classes.clickBox;
        if (this.props.insideButton) {
            clickBoxClassName = classes.clickBox;
        } else if (this.props.light) {
            clickBoxClassName = classes.lightNotInsideButtonClickBox;

            if (this.props.visibleBackground) {
                clickBoxClassName += ` ${classes.visibleBackground}`
            }
        } else {
            clickBoxClassName = classes.notInsideButtonClickBox;
        }

        if (this.props.alignLeft) {
            clickBoxClassName += ` ${classes.clickBoxLeft}`
        } else if (this.props.error) {
            clickBoxClassName += ` ${classes.rightAlignPadding}`
        }

        if (this.props.roundedBorder) {
            clickBoxClassName += ` ${classes.roundedBorder}`
        }

        let clickBoxStyle = {}

        if (this.props.outlineHover && !this.props.disabled) {
            clickBoxClassName += ` ${classes.outlineHover}`
        }

        if (this.props.noHover) {
            clickBoxClassName += ` ${classes.noHover}`
        }
        
        if (typeof this.props.padding == 'number') {
            clickBoxStyle.padding = `${this.props.padding}px`
        } else {
            clickBoxStyle.padding = this.props.padding
        }

        if (this.props.hideLightBackground) {
            clickBoxClassName += ` ${classes.hideLightBackground}`
        }


        var arrowDownIcon = null;
        if (this.props.disabled || this.props.hideArrow) {
            // Don't show arrow
        } else {
            arrowDownIcon =
                <i className={`material-icons ${this.props.arrowClassName}`} style={arrowStyle}>
                    arrow_drop_down
                </i>
        }

        let label

        if (this.props.rawLabel) {
            label = this.props.label
        } else {
            label =
                <div className={labelClassName} style={labelStyle}>
                    {this.props.label}
                </div>
        }

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

        var clickBox = 
            <div disabled={this.props.disabled} className={clickBoxClassName} style={clickBoxStyle}>
                {label}
                {arrowDownIcon}
                {errorNotification}
            </div>

        var content = null;

        if (this.props.disabled) {
            content = clickBox
        } else {
            content = 
                <Portal ref='portal' childPortals={this.props.childPortals} id={this.props.id} openByClickOn={clickBox} closeOnOutsideClick={true} onClose={this.onClose} onOpen={this.onOpen} >
                    {dropDownItems}
                </Portal>
        }
        let dropDownClassName = classNames(classes.dropDown, this.props.className)

        return (
            <div className={dropDownClassName} ref='dropDown'>
                <div className={classes.dropDownMenuContainer}>
                    {content}
                </div>
            </div>
        )
    }
}

export default DropDown;
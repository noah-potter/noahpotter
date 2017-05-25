import React from 'react';
import ReactDOM from 'react-dom';

import onClickOutside from 'react-onclickoutside';

import jss, { variables } from '../jss';

const styles = {
    dropDownMenu: {
        position: 'absolute',
        zIndex: 11,
        color: variables.textBlack,
        // background: 'white',
        // borderRadius: '10px',
        minWidth: '150px',
        // overflow: 'hidden',
        // boxShadow: '0px 0px 0px 10000px rgba(0, 0, 0, 0.29)',
    },
    background: {
        boxShadow: '0px 0px 0px 10000px rgba(0, 0, 0, 0.29)',
    },
    noBorder: {
        border: 'none',
    },
    top_left: {
        extend: 'dropDownMenu',
        bottom: '0px',
        right: '0px',
    },
    top_right: {
        extend: 'dropDownMenu',
        bottom: '0px',
        left: '0px',
    },
    bottom_left: {
        extend: 'dropDownMenu',
        top: '0px',
        right: '0px',
    },
    bottom_right: {
        extend: 'dropDownMenu',
        top: '0px',
        left: '0px',
    },
    closedDropDownMenu: {
        extend: 'dropDownMenu',
        display: 'none'
    },
    children: {
        maxHeight: '400px',
        overflowY: 'auto',
        overflowX: 'hidden',
        background: 'white',
    },
    staticHeader: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
    },
    staticFooter: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
    },
    fullHeight: {
        maxHeight: 'none',
    },
    inDialog: {
        zIndex: 21,
    },
    noBackground: {
        background: 'none',
    },
    borderRadius: {
        borderRadius: '3px',
    },
}

const { classes } = jss.createStyleSheet(styles).attach()

var cancelScrollEvent = function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    e.returnValue = false;
    return false;
};

var addScrollEventListener = function (elem, handler) {
    elem.addEventListener('wheel', handler, false);
};

var removeScrollEventListener = function (elem, handler) {
    elem.removeEventListener('wheel', handler, false);
};

class DropDown extends React.Component {

    static defaultProps = {
        horizontal: 'left',
        vertical: 'top'
    };

    static propTypes = {
        isOpen: React.PropTypes.bool,
        onClose: React.PropTypes.func,
        offLabel: React.PropTypes.string, // 'vertical', or 'horizontal[not supported yet]'. If specified, component pushes drop down off the label along the given axis
        horizontal: React.PropTypes.string, // 'left', 'right'. This indicates the direction the dropdown will list items
        vertical: React.PropTypes.string, // 'top', 'bottom'. 
        staticHeader: React.PropTypes.element,
        staticFooter: React.PropTypes.element,
        parent: React.PropTypes.element,
        scrollIntoView: React.PropTypes.bool, // Make sure items have a key
        offLabel: React.PropTypes.string, // horizontal or vertical
        noBorder: React.PropTypes.bool,
        noBackground: React.PropTypes.bool,
        borderRadius: React.PropTypes.bool,
        centerOnMouseX: React.PropTypes.bool,
    };

    constructor(props) {
        super(props)

        this.state = {
            // rect = parent rect
            // measured from top left corner
            rect: {
                right: 0,
                left: 0,
                top: 0,
                bottom: 0,
                mouseX: 0,
                height: 0,
                width: 0, // Parent container's width
            },
            height: 0, // This containers height
            width: 0, // This containers width
        }
    }

    componentDidMount() {
        this.updateItemsPosition();

        if (this.props.scrollIntoView) {
            let scrolled = false;
            React.Children.forEach(this.props.children, (child) => {
                if (!scrolled && child && child.props.selected) {
                    ReactDOM.findDOMNode(this.refs[`item-${child.key}`]).scrollIntoView({block: 'start', behavior: 'smooth'})
                    scrolled = true;
                }
            })
        }
    }

    componentDidUpdate() {
        this.updateItemsPosition();
    }

    updateItemsPosition() {
        if (this.refs.root) {
            var rect = ReactDOM.findDOMNode(this.refs.root).getBoundingClientRect();

            let nextWidth = parseInt(rect.width)
            let nextHeight = parseInt(rect.height)

            if (nextWidth != this.state.width || nextHeight != this.state.height) {
                this.setState({width: nextWidth, height: nextHeight})
            }
        }
    }

    setPosition(rect) {
        this.setState({rect})
    }

    handleClickOutside() {
        this.props.onClose();
    }

    render() {
        var self = this;
        var dropDownMenu = null;

        var children = React.Children.map(this.props.children, (child) => {
            if (child) {
                return React.cloneElement(child, {
                    closePortal: this.props.closeThePortal,
                    ref: `item-${child.key}`
                })
            } else {
                return child;
            }
        })

        var className;
        if (!this.props.isOpen) {
            className = classes.closedDropDownMenu;
        } else {
            className = classes.dropDownMenu;
            // className = classes[`${this.props.vertical}_${this.props.horizontal}`]
        }

        if (this.props.noBorder) {
            className += ` ${classes.noBorder}`
        }

        if (this.props.noBackground) {
            className += ` ${classes.noBackground}`
        }

        if (this.props.inDialog) {
            className += ` ${classes.inDialog}`
        }

        if (this.props.borderRadius) {
            className += ` ${classes.borderRadius}`
        }

        var style = {};
        let width = this.state.width
        let height = this.state.height
        let top, bottom, left, right;
        let calculatedTop, calculatedBottom, calculatedLeft, calculatedRight;

        // Vertical
        if (this.props.vertical == 'top') {

            if (this.props.offLabel == 'vertical') {
                // Align bottom edge to top of label
                bottom = window.innerHeight - this.state.rect.top
            } else {
                // Align bottom edge to bottom of label
                bottom = window.innerHeight - this.state.rect.top - this.state.rect.height
            }
            
            calculatedBottom = bottom
            calculatedTop = window.innerHeight - calculatedBottom - this.state.height

        } else if (this.props.vertical == 'bottom') {

            if (this.props.offLabel == 'vertical') {
                // Align top edge to bottom of label
                top = this.state.rect.bottom
            } else {
                // Align top edge to top of label
                top = this.state.rect.top
            }
            
            calculatedTop = top
            calculatedBottom = window.innerHeight - calculatedTop - this.state.height
        }

        // Horizontal
        if (this.props.centerOnMouseX) {
            left = this.state.rect.mouseX - (this.state.width / 2)
            calculatedRight = (window.innerWidth - left) - this.state.width

            if (left < 0) {
                left = 0
                right = null
            } if (calculatedRight < 0) {
                left = null
                right = 0
            }

        } else if (this.props.horizontal == 'left') {

            if (this.props.offLabel == 'horizontal') {
                // Align right edge to left of label
                right = window.innerWidth - this.state.rect.left
            } else {
                // Align right edge to right of label
                right = window.innerWidth - this.state.rect.left - this.state.rect.width
            }
            
            calculatedRight = right
            calculatedLeft = window.innerWidth - calculatedRight - this.state.width

        } else if (this.props.horizontal == 'right') {

            if (this.props.offLabel == 'horizontal') {
                // Align left edge to right of label
                left = this.state.rect.right
            } else {
                // Align left edge to left of label
                left = this.state.rect.left
            }
            
            calculatedLeft = left
            calculatedRight = window.innerWidth - calculatedLeft - this.state.width
        }


        // Keep inside screen
        if (calculatedRight < 0) {

            let offset = -calculatedRight

            right = 0
            left -= offset

        } else if (calculatedLeft < 0) {

            let offset = -calculatedLeft

            left = 0
            right -= offset

        } else if (calculatedTop < 0) {

            let offset = -calculatedTop

            top = 0
            bottom -= offset

        } else if (calculatedBottom < 0) {

            let offset = -calculatedBottom

            bottom = 0
            top -= offset
        }

        style = {
            top,
            bottom,
            left,
            right,
        }

        var childrenClassName = classes.children

        if (this.props.fullHeight) {
            childrenClassName += ` ${classes.fullHeight}`
        }

        if (this.props.noBackground) {
            childrenClassName += ` ${classes.noBackground}`
        }

        return (
            <div className={className} style={style} ref='root'>
                <div className={classes.background}>
                </div>
                <div className={classes.staticHeader}>
                    {this.props.staticHeader}
                </div>
                <div className={childrenClassName} ref='items'>
                    {children}
                </div>
                <div className={classes.staticFooter}>
                    {this.props.staticFooter}
                </div>
            </div>
        )
    }
}

export default DropDown;
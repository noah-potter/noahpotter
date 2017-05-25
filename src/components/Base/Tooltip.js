import React from 'react';
import ReactDOM from 'react-dom';

// Components
import { Tooltip } from 'pui-react-tooltip';
import { OverlayTrigger } from 'pui-react-overlay-trigger';

// Styles
import jss, { variables } from '../jss';

const styles = {
    popoverContainer: {
        borderRadius: '3px',
        background: variables.popoverBackground,
        padding: '4px 8px',
        color: 'white'
    },
    clickArea: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        cursor: 'pointer',
    },
    defaultContainer: {
        position: 'relative',
        display: 'flex',
    },
    cantClick: {
        // pointerEvents: 'none'
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

class ToolTip extends React.Component {

    static defaultProps = {
        allowManualToggle: true,
        preferPlace: 'top',
        controlledOpen: false,
    };

    static propTypes = {
        children: React.PropTypes.element,
        body: React.PropTypes.node,
        isOpen: React.PropTypes.bool,
        controlledOpen: React.PropTypes.bool, // Set to true to manually control when this tooltip is open
        allowManualToggle: React.PropTypes.bool,
        clickareaClassName: React.PropTypes.string,
        followMouse: React.PropTypes.bool,
        onMouseEnter: React.PropTypes.func,
        onMouseLeave: React.PropTypes.func,
        // preferPlace: top | right| bottom | left
    };

    constructor(props) {
        super(props);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.manuallyOpen = this.manuallyOpen.bind(this);
        this.manuallyClose = this.manuallyClose.bind(this);
        this.forwardEvent = this.forwardEvent.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);

        this.state = {
            isOpen: false,
            manuallyOpened: false,
        }
    }

    componentWillUnmount() {
        this.manuallyClose()
    }

    onMouseEnter(e) {
        this.setState({isOpen: true})

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(e)
        }
    }

    onMouseLeave(e) {
        if (!this.state.manuallyOpened) {
            this.setState({isOpen: false})
        }

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e)
        }
    }

    handleOutsideClick() {
        if (this.state.isOpen) {
            this.manuallyClose();
        }
    }

    forwardEvent(e) {
        // Very helpful
        // Basically this hides the top tooltip layer, gets the element underneath, then
        // executes the event on that element. This allows the user to click things under the
        // tooltip hover area
        // http://www.vinylfox.com/forwarding-mouse-events-through-layers/

        e.nativeEvent.stopPropagation();
        var x = e.clientX;
        var y = e.clientY;
        var mask = ReactDOM.findDOMNode(this.refs.clickArea);
        var masks = document.querySelectorAll(`.${classes.clickArea}`)
        var oldDisplay = mask.style.display;

        mask.style.display = 'none'
        for(var i in masks) {
            if (masks[i].style) {
                masks[i].style.display = 'none';
            }
        }

        var newEvent = new MouseEvent(e.nativeEvent.type, e.nativeEvent);

        setTimeout(() => {
            var belowElement = document.elementFromPoint(x, y);

            mask.style.display = oldDisplay
            for(var i in masks) {
                if (masks[i].style) {
                    masks[i].style.display = oldDisplay;
                }
            }

            if (document.createEvent) {
                belowElement.dispatchEvent(newEvent);
            } else {
                belowElement.fireEvent("on" + newEvent.eventType, newEvent);
            }
        }, 100)
    }

    handleClick(e) {
        if (this.props.allowManualToggle) {
            if (!this.state.manuallyOpened) {
                this.manuallyOpen();
            } else {
                this.manuallyClose();
            }
        } else {
            // This may need changing
            // It's just too indirect and unpredictable...
            if (this.props.children.props && this.props.children.props.onClick) {
                this.props.children.props.onClick(e);
            } else {
                this.forwardEvent(e);
            }
        }
    }

    manuallyOpen() {
        if (!this.props.disabled && this.props.allowManualToggle) {
            this.setState({isOpen: true, manuallyOpened: true});

            setTimeout(() => {
                window.addEventListener('click', this.handleOutsideClick);
            }, 200)
        }

    }

    manuallyClose() {
        if (this.state.isOpen || this.state.manuallyOpened) {
            this.setState({isOpen: false, manuallyOpened: false});
            window.removeEventListener('click', this.handleOutsideClick);
        }
    }

    onMouseMove(e) {
        if (this.props.followMouse) {
            let el = document.querySelector('.tether-element')

            if (el) {
                let width = el.getBoundingClientRect().width

                el.style.left = `${e.clientX - (width/2)}px`
            }
        }
    }

    render() {
        var { body, children, className, style, preferPlace, ...others } = this.props

        className += ` ${classes.defaultContainer}`
        var clickareaClassName = `${classes.clickArea} ${this.props.clickareaClassName}`

        if (!this.props.allowManualToggle) {
            clickareaClassName += ` ${classes.cantClick}`
        }

        // var body = 
        //     <div className={classes.popoverContainer}>
        //         {body}
        //     </div>

        if (this.props.controlledOpen) {
            return (
                <OverlayTrigger optimizations={{gpu: false}} display={this.props.isOpen} trigger='manual' placement={preferPlace} {...others} overlay={<Tooltip>{body}</Tooltip>}>
                    {children}
                </OverlayTrigger>
            )

        } else {
            return (
                <OverlayTrigger 
                    optimizations={{gpu: false}} 
                    display={this.state.isOpen} 
                    trigger='manual' 
                    placement={preferPlace} 
                    overlay={<Tooltip>{body}</Tooltip>}
                    {...others} 
                >
                    <div 
                        className={className} 
                        style={style} 
                        onMouseMove={this.onMouseMove}
                    >
                        <div 
                            ref='clickArea' 
                            onClick={this.handleClick} 
                            onMouseEnter={this.onMouseEnter} 
                            onMouseLeave={this.onMouseLeave} 
                            className={clickareaClassName}
                        >
                        </div>
                        {children}
                    </div>
                </OverlayTrigger>
            )
        }

    }
}

export default ToolTip;
import React from 'react';

import Button from './Button';

import jss, { variables } from '../JSS';

const styles = {
    buttonGroup: {
        display: 'flex',
        margin: '8px',
        // borderRadius: '3px',
        // overflow: 'hidden'
    },
    verticalButtonGroup: {
        extend: 'buttonGroup',
        overflow: 'initial',
        flexDirection: 'column',
        flex: '0 0 auto',
    },
    combinedButtonGroup: {
        extend: 'buttonGroup',
        boxShadow: variables.buttonBoxShadow,
        borderRadius: '3px',
        overflow: 'hidden'
    },
    paginationButtonGroup: {
        extend: 'combinedButtonGroup',
        margin: '0px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        borderBottomLeftRadius: '3px',
        borderBottomRightRadius: '3px',
    },
    flush: {
        margin: '0px',
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
    noBorderRadius_top: {
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
    },
    noBorderRadius_left: {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
    },
    noBorderRadius_right: {
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
    },
    noBorderRadius_bottom: {
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
    },
    fillHeight: {
        alignSelf: 'stretch',
    },
    expand: {
        flex: '1 1 auto',
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

class ButtonGroup extends React.Component {

    static propTypes = {
        combine: React.PropTypes.bool,
        forPagination: React.PropTypes.bool,
        vertical: React.PropTypes.bool, // Should buttons be aligned vertically
        flush: React.PropTypes.oneOfType([
                React.PropTypes.array,
                React.PropTypes.string,
                React.PropTypes.bool,
            ]),
        expand: React.PropTypes.bool,
        noBorderRadius: React.PropTypes.array,
        fillHeight: React.PropTypes.bool,
        className: React.PropTypes.string,
    };

    render() {

        var self = this;

        var children = React.Children.map(this.props.children, (child) => {
            if (child && child.type === Button) {
                return React.cloneElement(child, {
                    combine: self.props.combine || self.props.forPagination,
                    buttonGroupButton: true,
                    vertical: self.props.vertical,
                    raised: self.props.combine || self.props.forPagination || child.props.raised
                })
            }

            return child
        })

        var className = '';

        if (this.props.combine) {
            className = classes.combinedButtonGroup;
        } else if (this.props.forPagination) {
            className = classes.paginationButtonGroup
        } else if (this.props.vertical) {
            className = classes.verticalButtonGroup;
        } else {
            className = classes.buttonGroup;
        }

        if (this.props.flush) {
            if (this.props.flush instanceof Array) {
                this.props.flush.forEach(flush => {
                    className += ` ${classes['flush' + flush]}`;
                })
            } else if (typeof this.props.flush == 'string') {
                className += ` ${classes['flush' + this.props.flush]}`
            } else {
                className += ` ${classes['flush']}`
            }
        }

        if (this.props.className) {
            className + ` ${this.props.className}`
        }

        if (this.props.expand) {
            className += ` ${classes.expand}`
        }

        if (this.props.noBorderRadius) {
            this.props.noBorderRadius.forEach(side => {
                className += ` ${classes['noBorderRadius_' + side]}`;
            })
        }

        if (this.props.fillHeight) {
            className += ` ${classes.fillHeight}`
        }

        return (
            <div className={className}>
                {children}
            </div>
        )
    }
}

export default ButtonGroup;
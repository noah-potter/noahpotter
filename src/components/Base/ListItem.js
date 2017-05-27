import React from 'react';
import jss, { variables } from '../JSS';

import CheckBox from './CheckBox';

const styles = {
    label: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '20px',
        minHeight: '36px',
        height: '36px',
        background: variables.labelBackgroundColor,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        '&:hover': {
            background: variables.labelHoverBackgroundColor,
            color: variables.labelHoverColor
        }
    },
    selectedLabel: {
        extend: 'label',
        background: variables.selectedLabelBackgroundColor,
        color: variables.selectedLabelColor
    },
    compact: {
        extend: 'label',
        paddingTop: '4px',
        paddingBottom: '4px',
        minHeight: '28px',
    },
    selectedCompact: {
        extend: 'selectedLabel',
        paddingTop: '4px',
        paddingBottom: '4px',
        minHeight: '28px',
    },
    checkboxContainer: {
        marginRight: '4px'
    },
    disabled: {
        background: variables.disabledLabelBackgroundColor,
        color: variables.disabledLabelColor,
        cursor: 'default',
        '&:hover': {
            background: variables.disabledLabelBackgroundColor,
            color: variables.disabledLabelColor,
        }
    },
}

const { classes } = jss.createStyleSheet(styles).attach()

class ListItem extends React.Component {

    static defaultProps = {
        closeOnClick: true,
        selected: false,
        checked: true
    };

    // selected = true, checked = false

    static propTypes = {
        className: React.PropTypes.string,
        label: React.PropTypes.oneOfType([ // Or props.children
            React.PropTypes.string,
            React.PropTypes.node,
        ]),
        header: React.PropTypes.bool,
        noFormatting: React.PropTypes.bool,
        closeOnClick: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        selected: React.PropTypes.bool, // If showCheckbox and selected, checkbox will be checked
        checked: React.PropTypes.bool, // If showCheckbox and not selected and checked, checkbox will be checked
        compact: React.PropTypes.bool,
        showCheckbox: React.PropTypes.bool,
        disabled: React.PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        this.state = {}
    }

    onClick(e) {
        if (!this.props.disabled) {
            if (this.props.onClick) {
                this.props.onClick(e)
            }

            if (!this.props.closeOnClick) {
                e.stopPropagation();
            } else {
                this.props.closePortal(e);
            }
        } else {
            e.stopPropagation();
        }
    }

    renderCheckbox() {

    }

    render() {

        let highlighted = this.props.selected;
        let checked = this.props.checked;

        if (!this.props.selected) {
            checked = false
        }

        var className

        if (!this.props.noFormatting && (this.props.label || this.props.children)) {
            if (highlighted) {
                if (this.props.compact) {
                    className = classes.selectedCompact
                } else {
                    className = classes.selectedLabel;
                }
            } else if (this.props.compact) {
                className = classes.compact
            } else {
                className = classes.label
            }
        }

        if (this.props.disabled) {
            className += ` ${classes.disabled}`
        }

        className += ' ignore-react-onclickoutside'
        className += ` ${this.props.className}`

        var checkbox = null;

        if (this.props.showCheckbox) {
            checkbox = 
                <div className={classes.checkboxContainer}>
                    <CheckBox checked={checked}></CheckBox>
                </div>
        }

        return (
            <div 
                onClick={this.onClick} 
                onMouseEnter={this.props.onMouseEnter} 
                onMouseLeave={this.props.onMouseLeave} 
                className={className}
            >
                {checkbox}
                {this.props.label || this.props.children}
            </div>
        )
    }
}

export default ListItem;
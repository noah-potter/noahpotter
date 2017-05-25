import React from 'react';
import Portal from 'react-portal-children';

// Components
import Button from '../Base/Button';
import ButtonGroup from '../Base/ButtonGroup';

// Styles
import jss, { variables, colors } from '../jss';

const styles = {
    dialogRoot: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: variables.dimBackground,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '20',
    },
    dialogContainer: {
        background: 'white',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        minWidth: '30%',
        overflow: 'auto',
        maxHeight: 'calc(100% - 40px)'
    },
    header: {
        display: 'flex',
        fontSize: '24px',
        background: colors.red500.rgbString(),
        color: 'white',
        padding: '16px',
        flex: '0 0 auto',
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flex: '0 0 auto',
    },
    content: {
        padding: '16px',
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'auto'
    },
    noPadding: {
        padding: '0px',
    },
    noMinWidth: {
        minWidth: '0%',
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

class Dialog extends React.Component {

    static propTypes = {
        isOpened: React.PropTypes.bool,
        title: React.PropTypes.string,
        onCancel: React.PropTypes.func,
        cancelText: React.PropTypes.string,
        onSubmit: React.PropTypes.func,
        submitDisabled: React.PropTypes.bool,
        submitText: React.PropTypes.string,
        noPaddingBody: React.PropTypes.bool,
        noMinWidth: React.PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        var header = null;
        var footer = null;

        if (this.props.title) {
            header =
                <div className={classes.header} >
                    {this.props.title}
                </div>
        }

        if (this.props.onCancel || this.props.onSubmit) {
            footer =
                <div className={classes.footer}>
                    <ButtonGroup>
                        {this.props.onCancel ? 
                            <Button light onClick={this.props.onCancel} buttonGroupButton>
                                {this.props.cancelText || 'Cancel'}
                            </Button>
                        :
                            null
                        }
                        {this.props.onSubmit ? 
                            <Button light primary raised onClick={this.props.onSubmit} buttonGroupButton disabled={this.props.submitDisabled}>
                                {this.props.submitText || 'Submit'}
                            </Button>
                        :
                            null
                        }
                    </ButtonGroup>
                </div>
        }

        var contentClassName = classes.content;

        if (this.props.noPaddingBody) {
            contentClassName += ` ${classes.noPadding}`
        }

        let dialogContainerClassName = classes.dialogContainer

        if (this.props.noMinWidth) {
            dialogContainerClassName += ` ${classes.noMinWidth}`
        }

        return (
            <Portal isOpened={this.props.isOpened}>
                <div className={classes.dialogRoot}>
                    <div className={dialogContainerClassName}>
                        {header}
                        <div className={contentClassName}>
                            {this.props.children}
                        </div>
                        {footer}
                    </div>
                </div>
            </Portal>
        )
    }
}

export default Dialog;
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Immutable from 'immutable';
import {
} from '../../actions';
import {
} from '../../selectors';

// Components


// Styles
import jss, { variables, colors } from '../jss';
import VARS from '../VARS';

const styles = {
	root: {
	}
}

const { classes } = jss.createStyleSheet(styles).attach()

class EmptyComponent extends Component {

	static defaultProps = {

	};

	static propTypes = {

	}

	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div className={classes.root}>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	const {  } = state;

	return {
		
	};
}

export default connect(mapStateToProps, {
})(EmptyComponent);

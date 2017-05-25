import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';

import App from './App';

import JSS, { variables } from './components/jss';

const styles = {
	base: {
		display: 'flex',
		flex: '1 1 auto',
		maxWidth: '100%',
	}
}

const { classes } = JSS.createStyleSheet(styles).attach()

class Base extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={classes.base}>
				<App>
				</App>
			</div>
		);
	}
}

export default Base
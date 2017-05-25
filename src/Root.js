import React from 'react';
import Base from './Base';

import JSS, { variables, colors } from './components/jss';

const styles = {
	'@global': {
		html: {
			display: 'flex',
			height: '100%',
			fontFamily: 'Raleway, sans-serif !important',
			':-ms-input-placeholder': variables.labelColor,
			fontSize: '14px',
		},
		body: {
			display: 'flex',
			flex: '1 1 0px',
			maxWidth: '100%',
			flexDirection: 'column',
			fontFamily: 'Open Sans',
			margin: '0px',

		},
		'.root': {
			display: 'flex',
			flex: '1 1 0px',
			maxWidth: '100%',
		},
	}
}

const { classes } = JSS.createStyleSheet(styles).attach()

export default function Root() {
	return (
		<Base>
		</Base>
	)
}
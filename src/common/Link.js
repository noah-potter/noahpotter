/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import MuiLink from '@material-ui/core/Link'

// required for react-router-dom < 6.0.0
// see https://github.com/ReactTraining/react-router/issues/6056#issuecomment-435524678
const AdapterLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
))

export default function Link(props) {
  return (
    <MuiLink
      component={AdapterLink}
      underline="none"
      color="textPrimary"
      {...props}
    />
  )
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

// required for react-router-dom < 6.0.0
// see https://github.com/ReactTraining/react-router/issues/6056#issuecomment-435524678
const AdapterLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
))

export default React.forwardRef((props, ref) => {
  return (
    <Link
      component={AdapterLink}
      underline="none"
      color="textPrimary"
      {...props}
      ref={ref}
    />
  )
})

import React from 'react'
import { StylesProvider } from '@material-ui/styles'

import App from './App'

export default function Providers(props) {
  return (
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  )
}

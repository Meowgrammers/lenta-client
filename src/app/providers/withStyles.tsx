/* eslint-disable react/display-name */
import React from 'react'
import { GlobalStyle } from '../styles/global-styles'

export const withStyles = (component: () => React.ReactNode) => () => (
  <>
    <GlobalStyle />
    {component()}
  </>
)

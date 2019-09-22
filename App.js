import React, { Component } from 'react'
import AppNavigation from './src/screens/routes'
import { Root } from 'native-base'

export default class App extends Component {
  render() {
    return (
      <Root>
        <AppNavigation />
      </Root>
    )
  }
}
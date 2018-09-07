import Expo from 'expo'
import React, { Component } from 'react'

import { Container, TouchContainer } from './styles'
import { SideThree, SideOne, SideTwo, SideFour, SideFive, SideSix } from './components/dice/side'

class DiceApp extends Component {
  constructor (props) {
    super(props)
    this.state = { side: 0 }
    this._rollDice = this._rollDice.bind(this)
  }

  _rollDice () {
    const side = Math.floor(Math.random() * 6)
    this.setState({ side })
  }

  render () {
    const Side = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][this.state.side]
    return (
      <Container>
        <TouchContainer onPress={this._rollDice}>
          <Side />
        </TouchContainer>
      </Container>
    )
  }
}

Expo.registerRootComponent(DiceApp)

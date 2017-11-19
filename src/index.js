import Expo from 'expo'
import React, {Component} from 'react'

import SideOne from '../assets/sides/1.png'
import SideTwo from '../assets/sides/2.png'
import SideThree from '../assets/sides/3.png'
import SideFour from '../assets/sides/4.png'
import SideFive from '../assets/sides/5.png'
import SideSix from '../assets/sides/6.png'

import {Container, TouchContainer, Dice} from './styles'

class DiceApp extends Component {
  constructor(props) {
    super(props)
    this.state = {side: 1}
    this._rollDice = this._rollDice.bind(this)
  }

  _rollDice() {
    const side = Math.floor(Math.random() * 6)
    this.setState({side})
  }

  render() {
    const side = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][this.state.side]
    return (
      <Container>
        <TouchContainer onPress={this._rollDice}>
          <Dice source={side} />
        </TouchContainer>
      </Container>
    )
  }
}

Expo.registerRootComponent(DiceApp)

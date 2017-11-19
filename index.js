import Expo from 'expo'
import React, {Component} from 'react'
import {Text} from 'react-native'

class DiceApp extends Component {
  render() {
    return (
      <Text>Dice</Text>
    )
  }
}

Expo.registerRootComponent(DiceApp)

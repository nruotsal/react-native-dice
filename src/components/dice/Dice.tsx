import React from 'react'
import { SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix } from './Side'

type DiceProps = {
  side: number
}

const Dice: React.FC<DiceProps> = ({ side }) => {
  const Side = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][side]
  return <Side />
}

export default Dice

import React, { useState } from 'react'
import { Container, TouchContainer } from './styles'
import Dice from './dice/Dice'

const DiceApp: React.FC = () => {
  const [diceSide, setDiceSide] = useState(1)

  const handleDiceRoll = () => setDiceSide(Math.floor(Math.random() * 6))

  return (
    <Container>
      <TouchContainer onPress={handleDiceRoll}>
        <Dice side={diceSide} />
      </TouchContainer>
    </Container>
  )
}

export default DiceApp

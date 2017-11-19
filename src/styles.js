import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #00ced1;
  margin: 0;
  padding: 50px;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TouchContainer = styled.TouchableWithoutFeedback`
  width: 100%;
`

export const Dice = styled.Image.attrs({resizeMode: 'contain'})`
  width: 100%;
`

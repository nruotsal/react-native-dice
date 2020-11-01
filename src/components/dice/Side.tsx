import React from 'react'
import { Svg, Rect, Circle } from 'react-native-svg'

type DotProps = {
  cx: number,
  cy: number
}

const Dot: React.FC<DotProps> = props =>
  <Circle {...props} r={10} fill='black' />

const Square = () =>
  <Rect x={4} y={4} width={94} height={94} rx={10} fill='none' stroke='#000000' strokeWidth={5} />

const Side: React.FC = ({children}) =>
  <Svg height={100} width={100}>
    <Square />
    {children}
  </Svg>

export const SideOne = () =>
  <Side>
    <Dot cx={50} cy={50} />
  </Side>

export const SideTwo = () =>
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={25} cy={25} />
  </Side>

export const SideThree = () =>
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={50} cy={50} />
    <Dot cx={25} cy={25} />
  </Side>

export const SideFour = () =>
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={75} cy={25} />
    <Dot cx={25} cy={75} />
    <Dot cx={25} cy={25} />
  </Side>

export const SideFive = () =>
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={75} cy={25} />
    <Dot cx={50} cy={50} />
    <Dot cx={25} cy={75} />
    <Dot cx={25} cy={25} />
  </Side>

export const SideSix = () =>
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={75} cy={50} />
    <Dot cx={75} cy={25} />
    <Dot cx={25} cy={75} />
    <Dot cx={25} cy={50} />
    <Dot cx={25} cy={25} />
  </Side>

export default Side

import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from '../Logo'

const DaysBoxWrapper = styled.div`
  height: 256px;
  width: 376px;

  display: flex;
  flex-direction: row;

  margin-top: 32px;
  margin-left: -32px;

  @media (max-width: 375px) {
    width: 100vw;
    margin: 0;
  }
`

const Left = styled.div`
  height: 100%;

  width: 128px;

  /* background-color: var(--main-color);

  background: url('logo.svg'); */

  margin-top: -4px;

  --logo-color: var(--main-color);
`

const Right = styled.div`
  height: 100%;
  width: 248px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 32px solid var(--main-color);
  box-sizing: border-box;

  background: white;
  color: #4a4a4a;
  font-family: Futura;
`

const Number = styled.h3`
  margin: 0;

  font-size: 49px;
  font-weight: 700;
  text-align: center;
`

const Text = styled.p`
  width: 100%;
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  line-height: 13px;
  text-transform: uppercase;
  text-align: center;
`

export default class DaysBox extends Component {
  // TODO: MomentJS.
  _getDaysToHackPrague() {
    const HP_DATE = '2019-05-04'
    const timeDifference = new Date(HP_DATE).getTime() - Date.now()

    const diff = Math.round(timeDifference / (1000 * 60 * 60 * 24))

    return (diff >= 0) ? diff : 0
  }

  render() {
    const days = this._getDaysToHackPrague()
    const dayText = days === 1 ? 'day' : 'days'
    return (
      <DaysBoxWrapper>
        <Left>
          <Logo />
        </Left>
        <Right>
          <Number>{days}</Number>
          <Text>{dayText} to <br />HackPrague</Text>
        </Right>
      </DaysBoxWrapper>
    )
  }
}

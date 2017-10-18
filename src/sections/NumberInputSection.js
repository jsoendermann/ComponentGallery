import React, { Component } from 'react'
import styled from 'styled-components/native'
import NumberInput from 'react-native-number-input'

import Section from '../Section'

const INITIAL_STATE = {
  value: null,
  nextDigitIndex: 0,
}

export class NumberInputSection extends Component {
  state = INITIAL_STATE

  render() {
    return (
      <Section title="react-native-number-input">
        <Container>
          <NumberInput
            style={{ height: 120 }}
            title="Temperature"
            unitString=" °C"
            inputState={this.state}
            numberOfIntegerDigits={2}
            numberOfDecimalDigits={1}
            onClear={() => this.setState(INITIAL_STATE)}
            onValueChange={(value, nextDigitIndex) =>
              this.setState({ value, nextDigitIndex })}
          />
        </Container>
      </Section>
    )
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
`

const Text = styled.Text`
  font-size: 25;
  font-weight: bold;
  color: #ff3333;
`

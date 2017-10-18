import React, { Component } from 'react'
import styled from 'styled-components/native'
import AnimatedText from 'react-native-animated-text'

import Section from '../Section'

const HUMAN_RIGHTS = [
  'All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.',
  'All are equal before the law and are entitled without any discrimination to equal protection of the law. All are entitled to equal protection against any discrimination in violation of this Declaration and against any incitement to such discrimination.',
  'No one shall be subjected to arbitrary arrest, detention or exile.',
  'No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.',
]

export class AnimatedTextSection extends Component {
  state = { index: 0 }
  componentDidMount() {
    setInterval(
      () =>
        this.setState({ index: (this.state.index + 1) % HUMAN_RIGHTS.length }),
      2000,
    )
  }
  render() {
    return (
      <Section title="react-native-animated-text">
        <Container>
          <AnimatedText textStyle={{ fontWeight: '300' }}>
            {HUMAN_RIGHTS[this.state.index]}
          </AnimatedText>
        </Container>
      </Section>
    )
  }
}

const Container = styled.View`
  flex: 1;
  height: 150;
  margin: 20px;
`

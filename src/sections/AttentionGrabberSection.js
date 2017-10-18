import React, { Component } from 'react'
import styled from 'styled-components/native'
import AttentionGrabber from 'react-native-attention-grabber'

import Section from '../Section'

export const AttentionGrabberSection = () => (
  <Section title="react-native-attention-grabber">
    <Container>
      <AttentionGrabber pulse pulseDuration={3000} pulseMagnitude={0.1}>
        <Text>Blah blah blah...</Text>
      </AttentionGrabber>
    </Container>
  </Section>
)

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const Text = styled.Text`
  font-size: 25;
  font-weight: bold;
  color: #ff3333;
`

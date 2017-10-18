import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import PressMeButton from 'react-native-press-me-button'

import Section from '../Section'

export const PressMeButtonSection = () => (
  <Section title="react-native-press-me-button">
    <Container>
      <PressMeButton
        onPress={() => {}}
        width={200}
        height={60}
        buttonColor="#006600"
        backgroundColor="#F0F0F0"
      >
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
          Yes!
        </Text>
      </PressMeButton>
    </Container>
  </Section>
)

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

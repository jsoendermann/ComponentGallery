import React from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export default ({ title, children }) => (
  <OuterContainer
    style={{
      shadowColor: '#999',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    }}
  >
    <InnerContainer>
      <Header>{title}</Header>
      {children}
    </InnerContainer>
  </OuterContainer>
)

const OuterContainer = styled.View`
  margin-bottom: 20;
  border-radius: 4;
  border-color: #aaa;
  border-width: ${StyleSheet.hairlineWidth};
  elevation: 2;
`

const InnerContainer = styled.View`
  border-radius: 4;
  overflow: hidden;
  align-items: stretch;
`

const Header = styled.Text`
  padding-vertical: 4;
  padding-horizontal: 10;
  background-color: #ddd;
  border-color: #aaa;
  font-weight: bold;
`

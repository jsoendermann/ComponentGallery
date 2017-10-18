import React from 'react'
import styled from 'styled-components/native'
import BouncyView from 'react-native-bouncy-view'

import Section from '../Section'

export const BouncyViewSection = () => (
  <Section title="react-native-bouncy-view">
    <Container>
      <LeftHalf>
        <BouncyView>
          <FoodText>🍏</FoodText>
          <FoodText>🥑</FoodText>
          <FoodText>🥕</FoodText>
          <FoodText>🍅</FoodText>
          <FoodText>🐟</FoodText>
          <FoodText>🥜</FoodText>
          <FoodText>🍵</FoodText>
        </BouncyView>
      </LeftHalf>
      <RightHalf>
        <BouncyView bounceDuration={4000}>
          <ChineseText>中</ChineseText>
          <ChineseText>日</ChineseText>
          <ChineseText>美</ChineseText>
          <ChineseText>德</ChineseText>
          <ChineseText>法</ChineseText>
          <ChineseText>英</ChineseText>
          <ChineseText>韩</ChineseText>
        </BouncyView>
      </RightHalf>
    </Container>
  </Section>
)

const Container = styled.View`flex-direction: row;`

const LeftHalf = styled.View`
  flex: 1;
  align-items: center;
  padding-vertical: 20;
`
const RightHalf = styled(LeftHalf)`background-color: #221f88;`

const FoodText = styled.Text`font-size: 50;`
const ChineseText = styled.Text`
  font-size: 50;
  color: white;
  font-weight: 200;
`

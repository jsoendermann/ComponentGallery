import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  ScrollView,
} from 'react-native'
import styled from 'styled-components/native'

import {
  AnimatedTextSection,
  BouncyViewSection,
  PressMeButtonSection,
  AttentionGrabberSection,
  NumberInputSection,
} from './sections'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
        <View style={styles.container}>
          <BouncyViewSection />
          <AttentionGrabberSection />
          <NumberInputSection />
          <AnimatedTextSection />
          <PressMeButtonSection />
          <Text style={{ alignSelf: 'center', color: '#aaa' }}>
            Jan Soendermann
          </Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',

    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 30 : 20,
  },
})

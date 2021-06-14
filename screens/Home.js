import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Home() {
  return (
    <View style={ styles.container } >
      <View style={ styles.content } >
        <Text style={ styles.text } >Home is here !</Text>
      </View>
    </View>
  )
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '800',
  }
})

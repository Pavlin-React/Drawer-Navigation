import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from '../Header/Header'

export default function Home( { navigation } ) {
  return (
    <View style={ styles.container } >
      <Header title='Home' navigation={ navigation } />
      <View style={ styles.content } >
        <Text style={ styles.text } >Home is here</Text>
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

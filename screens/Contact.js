import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Contact( { navigation } ) {
  return (
    <View style={ styles.container } >
      <View style={ styles.content } >
        <Text style={ styles.text } >Contact is here !</Text>
        <Button title='Go back' onPress={ () => navigation.goBack() } />
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
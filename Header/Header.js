import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Header( { navigation, title } ) {

  let openMenu = () => {
    navigation.openDrawer()
  }
  return (
    <View style={ styles.header } >
      <TouchableOpacity style={ styles.icons } onPress={ openMenu } >
        <Ionicons name="md-menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={ styles.headerTitle } >
        <Text style={ styles.headerText } >{ title }</Text>
      </View>
    </View>
  )
}

let styles = StyleSheet.create({
  header: {
    marginTop: 26,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1
  },
  icons: {
    position: 'absolute',
    left: 15,
    top: 16
  }
})

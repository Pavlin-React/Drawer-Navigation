import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Home from '../screens/Home'
import Contact from '../screens/Contact'

let CustomDrawerContent = ( props ) => {
  return(
    <ScrollView style={ styles.container } >
      <View style={ styles.drawerHeader } >
        <View>
          <Text style={ styles.drawerHeaderText } >Drawer Menu</Text>
        </View>
      </View>
      <DrawerContentScrollView { ...props } >
        <DrawerItemList { ...props } />
        <DrawerItem
          label='Close Drawer'
          onPress={ () => props.navigation.closeDrawer() }
        />
      </DrawerContentScrollView>
    </ScrollView>
  )
}

let Drawer = createDrawerNavigator()

function MyDrawer() {
  return(
    <Drawer.Navigator
      backBehavior='history'
      drawerContent={ props => <CustomDrawerContent { ...props } /> }
    >
      <Drawer.Screen
        name='Home'
        component={ Home }
      />
      <Drawer.Screen
        name='Contact'
        component={ Contact }
      />

    </Drawer.Navigator>
  )
}

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: 'darkgray',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  }
})



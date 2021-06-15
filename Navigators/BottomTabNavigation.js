import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

function Home() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'aqua' }} >
      <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }} >Home is here</Text>
    </View>
  )
}
function Content( { navigation } ) {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }} >
      <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }} >Content is here</Text>
      <Button title='Go Back' onPress={ () => navigation.goBack() } />
    </View>
  )
}
function About( { navigation } ) {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }} >
      <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }} >About is here</Text>
      <Button title='Go Back' onPress={ () => navigation.goBack() } />
    </View>
  )
}

const Tab = createBottomTabNavigator();




function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: 'aqua'
      }}
    >
      <Tab.Screen
        name='Home'
        component={ Home }
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ( { color, size } ) => (
            <Ionicons name="md-home" size={size} color={ color } />
          )
        }}
      />
      <Tab.Screen
        name='Contact'
        component={ Content }
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ( { color, size } ) => (
            <MaterialIcons name="contacts" size={size} color={ color } />
          )
        }}
      />
      <Tab.Screen
        name='About'
        component={ About }
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ( { color, size } ) => (
            <Ionicons name="information-circle-sharp" size={size} color={ color } />
          )
        }}
      />
    </Tab.Navigator>
  )
}


export default function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  )
}

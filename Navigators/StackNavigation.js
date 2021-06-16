import React from 'react'
import { View, Text, Button, Animated } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home( { navigation } ) {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'aqua' }} >
      <Text style={{ fontSize: 20, color: 'black' }} >Home is here ?</Text>
      <Button title='Go to Content' onPress={ () => navigation.navigate( 'Content' ) } />
    </View>
  )
}
function Content( { navigation } ) {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }} >
      <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }} >Content is here</Text>
      <Button title='Go to About' onPress={ () => navigation.navigate( 'About' ) } />
    </View>
  )
}
function About( { navigation } ) {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }} >
      <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }} >About is here</Text>
      <Button title='Go to Home' onPress={ () => navigation.navigate( 'Home' ) } />
    </View>
  )
}

let forFade = ( { current, next } ) => {
  let opacity = Animated.add(
    current.progress,
    next ? next.progress: 0
  ).interpolate( { 
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0]
   } )
   return{
     leftButtonStyle: { opacity },
     rightButtonStyle: { opacity },
     titleStyle: { opacity },
     backgroundStyle: { opacity }
   }
}

const Stack = createStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={ Home }
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' }
        }}
      />
      <Stack.Screen
        name='Content'
        component={ Content }
        options={{
          headerStyleInterpolator: forFade
        }}
      />
      <Stack.Screen
        name='About'
        component={ About }
        options={{
          headerStyleInterpolator: forFade
        }}
      />
    </Stack.Navigator>
  )
}

export default function StackNavigationState() {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}
import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function Home() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'aqua' }}>
      <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }}>
        Home is here
      </Text>
    </View>
  )
}
function Contact() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'aqua' }}>
      <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }}>
        Contact is here
      </Text>
    </View>
  )
}
function About() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'aqua' }}>
      <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }}>
        About is here
      </Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "aqua",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Home" }}
      >
        Home
      </Tab.Screen>
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{ tabBarLabel: "Contact" }}
      >
        Contact
      </Tab.Screen>
      <Tab.Screen
        name="About"
        component={About}
        options={{ tabBarLabel: "About" }}
      >
        About
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function TabBarNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

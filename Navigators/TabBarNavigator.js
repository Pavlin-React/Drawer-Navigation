import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";


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

  let insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "black",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "coral", marginTop: insets.top }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{ tabBarLabel: "Contact" }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{ tabBarLabel: "About" }}
      />
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

import React from 'react';
import TabBarNavigator from './Navigators/TabBarNavigator'
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return(
    <SafeAreaProvider>
      <TabBarNavigator/>
    </SafeAreaProvider>
  )
}

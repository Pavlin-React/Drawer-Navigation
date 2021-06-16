import React from 'react';
import TabBarNavigator from './Navigators/TabBarNavigator'
import BottomTabNavigation from './Navigators/BottomTabNavigation'
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return(
    <SafeAreaProvider>
      <BottomTabNavigation/>
    </SafeAreaProvider>
  )
}

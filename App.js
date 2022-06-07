import React from "react";
import Navigator from './Navigation/Navigator';
import useSyncExternalStore from 'react';
import { NavigationContainer } from "@react-navigation/native";

export default function App(){
return(
  <NavigationContainer>
    <Navigator />
  </NavigationContainer>
  )
}

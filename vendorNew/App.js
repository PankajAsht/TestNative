import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from './src/HomeScreen';
import RouteTwo from './src/routetwo';
import CounterScreen from './src/Counter';
import ImageScreen from './src/ImageScreen';
import ColorScreen from './src/ColorScreen';
import HomeScreen from './src/HomeScreen';
import SquareScreen from './src/SquareScreen';
import CountNew from './src/CountNew';
import TextScreen from './src/TextScreen';
import BoxScreen from './src/BoxScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator >
     
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RouteTwo" component={RouteTwo} />    
      <Stack.Screen name="ImgSrc" component={ImageScreen} />   
      <Stack.Screen name="CounterSrc" component={CounterScreen} />     
      <Stack.Screen name="ColorSrc" component={ColorScreen} />
      <Stack.Screen name="SqScr" component={SquareScreen} />
      <Stack.Screen name="CounterDemo" component={CountNew} />
      <Stack.Screen name="TextSrceen1" component={TextScreen} />
      <Stack.Screen name="BoxScreen1" component={BoxScreen} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

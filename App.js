import React, { useState } from "react";
import { Image, View, StyleSheet, SafeAreaView, Text } from "react-native";
import { Themes } from "./assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./app/screens/HomeScreen";
import Preview from "./app/screens/Preview";
import Details from "./app/screens/Details";

export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
              <Stack.Screen name="Preview" component={Preview} 
                options={{
                  title: 'Song preview',
                  headerStyle: {
                  backgroundColor: Themes.colors.background,
                  },
                  headerTitleStyle: {
                    color: Themes.colors.white,
                  },
                  headerBackTitle: 'Back',
                }}/>
              <Stack.Screen name="Details" component={Details} 
                options={{
                  title: 'Song details',
                  headerStyle: {
                  backgroundColor: Themes.colors.background,
                  },
                  headerTitleStyle: {
                    color: Themes.colors.white,
                  },
                  headerBackTitle: 'Back',
                }}/>    
          </Stack.Navigator>
      </NavigationContainer>
  );
};

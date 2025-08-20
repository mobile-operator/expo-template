import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import WelcomeScreen from './screens/WelcomeScreen';
import QuestionOneScreen from './screens/QuestionOneScreen';
import QuestionTwoScreen from './screens/QuestionTwoScreen';
import PaywallScreen from './screens/PaywallScreen';
import LoginScreen from './screens/LoginScreen';
import MainAppScreen from './screens/MainAppScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#E85A4F" />
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="QuestionOne" component={QuestionOneScreen} />
        <Stack.Screen name="QuestionTwo" component={QuestionTwoScreen} />
        <Stack.Screen name="Paywall" component={PaywallScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainAppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
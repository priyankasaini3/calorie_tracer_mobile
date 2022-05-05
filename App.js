import React from 'react'
import 'react-native-gesture-handler';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  LoginScreen,
  signupscreen,
 startscreen,
} from './src/screens'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={startscreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="signupscreen" component={signupscreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginProvider from './src/components/loginContext';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Cadastro from './src/screens/Cadastro';
import Escolha from './src/screens/Escolha';

const Stack = createStackNavigator();

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Faça seu Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              fontFamily: 'times new roman',
              fontSize: 24,
              color: 'white',
            },
            headerTintColor: '#FFCC00', // Cor da seta de volta
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </LoginProvider>
  );
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Register from './Components/RegisterComponent';
import Home from './Components/HomeComponent';
import { createStackNavigator } from '@react-navigation/stack';



type RootStackParamList = {
    Вход: any;
    Регистрация: any;
  };

  
const RootStack = createStackNavigator<RootStackParamList>();


const StackNav = ()=> {
    return(
        <RootStack.Navigator initialRouteName="Вход">
          <RootStack.Screen name="Вход" component={Home} />
          <RootStack.Screen name="Регистрация" component={Register}/>
        </RootStack.Navigator>
    )
}


const App = () => {
  return (
      <NavigationContainer>
      <StackNav/>
      </NavigationContainer>
    
  );
};

export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import SignUp from './src/screens/SignUp';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='details' component={Details} options={{ title: "Home" }} />
        <Stack.Screen name='home' component={Home} options={{ title: "Details" }} />
        <Stack.Screen name="sign-up" component={SignUp} options={{ title: 'SignUp' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




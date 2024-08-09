import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Login} from '../screens/Login';
import {SafeAreaView} from 'react-native';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{headerShown: false, navigationBarHidden: true}}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{headerShown: false, navigationBarHidden: true}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false, navigationBarHidden: true}}
            name="AddTrip"
            component={AddTripScreen}
          />
          <Stack.Screen
            options={{headerShown: false, navigationBarHidden: true}}
            name="AddExpense"
            component={AddExpenseScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;

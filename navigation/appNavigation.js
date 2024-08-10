import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {SafeAreaView} from 'react-native';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            options={{headerShown: false, navigationBarHidden: true}}
            name="Home"
            component={Home}
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
          <Stack.Screen
            options={{headerShown: false, navigationBarHidden: true}}
            name="TripExpenses"
            component={TripExpensesScreen}
          />
          <Stack.Screen
            options={{headerShown: false, navigationBarHidden: true}}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              navigationBarHidden: true,
              presentation: 'modal',
            }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              navigationBarHidden: true,
              presentation: 'modal',
            }}
            name="SignUpScreen"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;

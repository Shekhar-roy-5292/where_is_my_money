import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../config/firebase';
import {setUser, clearUser} from '../redux/slices/user';
import {Home} from '../screens/Home';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, u => {
    dispatch(setUser(u));
    // console.log('user is logged in', user);
  });

  const {user} = useSelector(state => state.user);

  if (user) {
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
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="WelcomeScreen">
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
  }
};

export default AppNavigation;

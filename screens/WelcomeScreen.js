import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '../components/ScreenWrapper';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View classname="h-full flex justify-around">
        <View className="flex-row justify-center mt-10 mb-14">
          <Image
            className="h-72 w-72"
            source={require('../assets/images/welcome.png')}
          />
        </View>
        <View className="mx-5 mb-20">
          <Text className="text-center text-slate-950 font-bold text-4xl mb-10">
            Money Lead
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            className="shadow p-3 rounded-full mb-5"
            style={{backgroundColor: colors.button}}>
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            className="shadow p-3 rounded-full"
            style={{backgroundColor: colors.button}}>
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

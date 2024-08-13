import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '../components/ScreenWrapper';
import {colors} from '../theme';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import Loading from '../components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLoading} from '../redux/slices/user';
export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {userLoading} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
      } catch (error) {
        dispatch(setUserLoading(false));
        Snackbar.show({
          text: error.message,
          backgroundColor: 'red',
        });
      }
    } else {
      Snackbar.show({
        text: 'Please enter email and password',
        backgroundColor: 'red',
      });
    }
  };
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-between">
        <View>
          <View className="relative">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text className="text-xl font-bold text-center text-slate-950">
              Login
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-80 w-80"
              source={require('../assets/images/login.png')}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className=" text-slate-950 text-lg font-bold">Email</Text>
            <TextInput
              value={email}
              onChangeText={value => setEmail(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className="text-lg text-slate-950 font-bold">Password</Text>
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={value => setPassword(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <TouchableOpacity className="flex-row justify-end">
              <Text>Forget Password !</Text>
            </TouchableOpacity>
          </View>
          <View>
            {userLoading ? (
              <Loading />
            ) : (
              <TouchableOpacity
                style={{backgroundColor: colors.button}}
                className="my-6 rounded-full p-3 shadow-sm mx-2"
                onPress={handleLogin}>
                <Text className="text-center text-white text-lg font-bold">
                  Sign In
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

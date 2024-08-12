// import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {ScreenWrapper} from '../components/ScreenWrapper';
// import {colors} from '../theme';
// import BackButton from '../components/BackButton';
// import {useNavigation} from '@react-navigation/native';
// import Snackbar from 'react-native-snackbar';
// import {createUserWithEmailAndPassword} from 'firebase/auth';
// import {auth} from '../config/firebase';
// export default function SignUpScreen() {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const navigation = useNavigation();
//   const handleLogin = async () => {
//     if (email && password) {
//       // navigation.goBack();
//       // navigation.navigate('Home');
//       await createUserWithEmailAndPassword(auth, email, password);
//     } else {
//       Snackbar.show({
//         text: 'Please enter email and password',
//         backgroundColor: 'red',
//       });
//     }
//   };
//   return (
//     <ScreenWrapper>
//       <View className="h-full flex justify-between">
//         <View>
//           <View className="relative">
//             <View className="absolute top-0 left-0">
//               <BackButton />
//             </View>
//             <Text
//               className="text-xl font-bold text-center"
//               style={colors.heading}>
//               Sign Up
//             </Text>
//           </View>
//           <View className="flex-row justify-center my-3 mt-5">
//             <Image
//               className="h-80 w-80"
//               source={require('../assets/images/signup.png')}
//             />
//           </View>
//           <View className="space-y-2 mx-2">
//             <Text style={colors.heading} className="text-lg font-bold">
//               Email
//             </Text>
//             <TextInput
//               value={email}
//               onChangeText={value => setEmail(value)}
//               className="p-4 bg-white rounded-full mb-3"
//             />
//             <Text style={colors.heading} className="text-lg font-bold">
//               Password
//             </Text>
//             <TextInput
//               value={password}
//               secureTextEntry={true}
//               onChangeText={value => setPassword(value)}
//               className="p-4 bg-white rounded-full mb-3"
//             />
//           </View>
//           <View>
//             <TouchableOpacity
//               style={{backgroundColor: colors.button}}
//               className="my-6 rounded-full p-3 shadow-sm mx-2"
//               onPress={handleLogin}>
//               <Text className="text-center text-white text-lg font-bold">
//                 Sign Up
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ScreenWrapper>
//   );
// }

// export default SignUpScreen;

import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {ScreenWrapper} from '../components/ScreenWrapper';
import BackButton from '../components/BackButton';
import {colors} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLoading} from '../redux/slices/user';
import Loading from '../components/Loading';
const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userLoading} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleSignUp = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
      } catch (error) {
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
            <Text
              className="text-xl font-bold text-center"
              style={colors.heading}>
              Sign Up
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-80 w-80"
              source={require('../assets/images/signup.png')}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text style={colors.heading} className="text-lg font-bold">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text style={colors.heading} className="text-lg font-bold">
              Password
            </Text>
            <TextInput
              value={password}
              secureTextEntry
              onChangeText={setPassword}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
          <View>
            {userLoading ? (
              <Loading />
            ) : (
              <TouchableOpacity
                style={{backgroundColor: colors.button}}
                className="my-6 rounded-full p-3 shadow-sm mx-2"
                onPress={handleSignUp}>
                <Text className="text-center text-white text-lg font-bold">
                  Sign UP
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUpScreen;

import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '../components/ScreenWrapper';
import {colors} from '../theme';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';
export default function AddTripScreen() {
  const [place, setPlace] = React.useState('');
  const [country, setCountry] = React.useState('');
  const navigation = useNavigation();
  const handleAddTrrip = () => {
    if (place && country) {
      navigation.navigate('Home');
      setPlace('');
      setCountry('');
    }
  };
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-between">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text
              className="text-xl font-bold text-center"
              style={colors.heading}>
              Add Trip
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-72 w-72"
              source={require('../assets/images/4.png')}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text style={colors.heading} className="text-lg font-bold">
              Where On Earth ?
            </Text>
            <TextInput
              value={place}
              onChangeText={value => setPlace(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text style={colors.heading} className="text-lg font-bold">
              Which Country ?
            </Text>
            <TextInput
              value={country}
              onChangeText={value => setCountry(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
          <View>
            <TouchableOpacity
              style={{backgroundColor: colors.button}}
              className="my-6 rounded-full p-3 shadow-sm mx-2"
              onPress={handleAddTrrip}>
              <Text className="text-center text-white text-lg font-bold">
                Add Trip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

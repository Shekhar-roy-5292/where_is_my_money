import React from 'react';
import {View, Text, Image} from 'react-native';
export default function EmptyList({message}) {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
      <Image
        className="w-32 h-32 shadow"
        source={require('../assets/images/empty.png')}
      />
      <Text className="font-bold text-gray-400">
        {message || 'data not found'}
      </Text>
    </View>
  );
}

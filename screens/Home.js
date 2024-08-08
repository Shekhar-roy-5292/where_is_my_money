import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from '../components/ScreenWrapper';
import React from 'react';
import {colors} from '../theme/index';
import randomImage from '../assets/images/randomImage';
export const Home = () => {
  const item = [
    {
      id: 1,
      place: 'London',
      country: 'UK',
    },
    {
      id: 2,
      place: 'New York',
      country: 'USA',
    },
    {
      id: 3,
      place: 'Paris',
      country: 'France',
    },
    {
      id: 4,
      place: 'Tokyo',
      country: 'Japan',
    },
    {
      id: 5,
      place: 'Berlin',
      country: 'Germany',
    },
    {
      id: 6,
      place: 'Moscow',
      country: 'Russia',
    },
  ];
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text style={colors.heading} className="font-bold text-3xl shadow-sm">
          MoneyLead
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/images/banner.png')}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center">
          <Text style={colors.heading} className="font-bold text-xl">
            Recent Trips
          </Text>
          <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text style={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList
            data={item}
            numColumns={2}
            keyExtractor={item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            className="mx-1"
            renderItem={({item}) => {
              return (
                <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text style={colors.heading} className="font-bold">
                      {item.place}
                    </Text>
                    <Text style={colors.heading} className="font-xs">
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from '../components/ScreenWrapper';
import React from 'react';
import {colors} from '../theme/index';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ExpensesCard from '../components/ExpensesCard';

export default function TripExpensesScreen(props) {
  const {id, place, country} = props.route.params;
  // console.log(props);
  const item = [
    {
      id: 1,
      title: 'ate fruit',
      amount: 10,
      category: 'food',
    },
    {
      id: 2,
      title: 'drink water',
      amount: 5,
      category: 'drinks',
    },
    {
      id: 3,
      title: 'bought jacket',
      amount: 222,
      category: 'shopping',
    },
    {
      id: 4,
      title: 'Watched a movie',
      amount: 100,
      category: 'entertainment',
    },
    {
      id: 5,
      title: 'buy some book',
      amount: 10,
      category: 'books',
    },
  ];
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="relative mt-5">
        <View className="absolute top-0 left-0">
          <BackButton />
        </View>
        <Text className="text-xl font-bold text-center" style={colors.heading}>
          {place}
        </Text>
        <Text className="text-xs text-center" style={colors.heading}>
          {country}
        </Text>
      </View>
      <View className="flex-row justify-center items-center rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/images/7.png')}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center">
          <Text style={colors.heading} className="font-bold text-xl">
            Recent Expenses
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddExpense')}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text style={colors.heading}>Add Expenses</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList
            data={item}
            ListEmptyComponent={
              <EmptyList message={"You haven't recorded any Expenses yet ! "} />
            }
            keyExtractor={item.id}
            showsVerticalScrollIndicator={false}
            className="mx-1"
            renderItem={({item}) => {
              return <ExpensesCard item={item} />;
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

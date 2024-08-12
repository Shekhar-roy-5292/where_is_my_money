import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from '../components/ScreenWrapper';
import React from 'react';
import {colors} from '../theme/index';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ExpensesCard from '../components/ExpensesCard';
import {getDocs, query, where} from 'firebase/firestore';
import {expensesRef} from '../config/firebase';

export default function TripExpensesScreen(props) {
  const {id, place, country} = props.route.params;
  // console.log(props);

  const navigation = useNavigation();
  const [expenses, setExpenses] = React.useState([]);
  const isFocused = useIsFocused();
  const fetchExpenses = async () => {
    const q = query(expensesRef, where('tripId', '==', id));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      data.push({...doc.data(), id: doc.id});
    });
    setExpenses(data);
  };
  React.useEffect(() => {
    if (isFocused) {
      fetchExpenses();
    }
  }, [isFocused]);
  return (
    <ScreenWrapper className="flex-1">
      <View className="relative mt-5">
        <View className="absolute top-0 left-0">{/* <BackButton /> */}</View>
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
            onPress={() =>
              navigation.navigate('AddExpense', {id, place, country})
            }
            className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text style={colors.heading}>Add Expenses</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList
            data={expenses}
            ListEmptyComponent={
              <EmptyList message={"You haven't recorded any Expenses yet ! "} />
            }
            keyExtractor={expenses.id}
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

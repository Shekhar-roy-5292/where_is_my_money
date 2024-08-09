import {View, Text} from 'react-native';
import React from 'react';
import {categoryBG, colors} from '../theme';

export default function ExpensesCard({item}) {
  return (
    <View
      style={{backgroundColor: categoryBG[item.category]}}
      className="flex-row justify-between items-center p-3 px-5 mb-3 bg-red-300 rounded-2xl">
      <View>
        <Text className="font-bold" style={colors.heading}>
          {item.title}
        </Text>
        <Text className="text-xs" style={colors.heading}>
          {item.category}
        </Text>
      </View>
      <View>
        <Text>{item.amount}</Text>
      </View>
    </View>
  );
}

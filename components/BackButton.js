import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {SparklesIcon as SparklesIconOutline} from 'react-native-heroicons/outline';
import {colors} from '../theme';
export default function BackButton() {
  return (
    <TouchableOpacity className="bg-white rounded-full h-8 w-8">
      <ChevronLeftIcon fill="black" color={colors.button} size={32} />
    </TouchableOpacity>
  );
}

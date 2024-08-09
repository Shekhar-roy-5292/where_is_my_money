import {View, StatusBar, Platform} from 'react-native';
import React from 'react';

export const ScreenWrapper = ({children}) => {
  let statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS === 'ios'
    ? 30
    : 0;
  return <View>{children}</View>;
  // return <View style={{paddingTop: statusBarHeight}}>{children}</View>;
};

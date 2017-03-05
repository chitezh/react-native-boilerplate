import React from 'react';
import { Text, View } from 'react-native';

import exampleStyle from './style';

export default () => (
  <View style={exampleStyle.container}>
    <Text style={exampleStyle.welcome}>
        Welcome to React Native!
    </Text>
    <Text style={exampleStyle.instructions}>
        To get started, edit index.android.js
    </Text>
    <Text style={exampleStyle.instructions}>
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
    </Text>
  </View>
);

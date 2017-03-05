
import React from 'react';
import {
    Image,
    ActivityIndicator,
    View,
} from 'react-native';
import splashStyles from './style';
import colors from '../../global/colors';

const logo = require('../../../assets/images/logo.png');

export default () => (
  <View style={splashStyles.container}>
    <Image
      style={splashStyles.logo}
      source={logo}
    />
    <ActivityIndicator animating size={'large'} color={colors.primary} />
  </View>
);

import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style';
import icon from '../../../assets/ic_premium_acc.png';

export default function StockContainer({stock}) {
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Stock: {stock}</Text>
          <Image style={styles.icon} source={icon} />
    </View>
  );
}

import React from 'react';
import {View, Text, Image} from 'react-native';
import { styles } from './style';
import ic_name from '../../../assets/ic_name.png';

export default function NameContainer({name}) {
  return (
      <View style={styles.container}>
          <Image source={ic_name} style={styles.icon} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

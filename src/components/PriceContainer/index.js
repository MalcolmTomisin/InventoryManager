import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import bg from '../../../assets/ic_bg.png';

function NameContainer({price, containerStyle}) {
  return (
    <View style={containerStyle}>
      <Image source={bg} style={styles.icon} />
      <Text style={styles.text}>$ {price}</Text>
    </View>
  );
}

export default NameContainer;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 18,
    position: 'absolute',
    top: 13,
    left: 8,
    fontWeight: '700',
    textAlign: 'center',
  },
  icon: {width: 50, height: 50},
});

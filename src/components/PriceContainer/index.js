import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import bg from '../../../assets/ic_premium_acc.png';

function SvgComponent({ price, containerStyle}) {
  return (
    <View style={containerStyle}>
      <Image source={bg} style={{width: 50, height: 50}} />
      <Text style={styles.text}>$ {price}</Text>
    </View>
  );
}

export default SvgComponent;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 18,
    position: 'absolute',
    top: 13,
    left: 8,
    fontWeight: '700',
    textAlign: 'center',
  },
});

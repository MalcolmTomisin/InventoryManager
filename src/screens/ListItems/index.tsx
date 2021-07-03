import React from 'react';
import {InventoryList, FloatingButton} from '../../components';
import {data} from './data';
import {View} from 'react-native';
import styles from './style';

export default function Inventory() {
  return (
    <View style={styles.container}>
      <InventoryList data={data} />
      <FloatingButton onPress={() => {}} />
    </View>
  );
}

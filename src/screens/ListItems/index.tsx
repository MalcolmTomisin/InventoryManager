import React from 'react';
import {InventoryList, FloatingButton} from '../../components';
import {data} from './data';
import {View} from 'react-native';
import styles from './style';
import utils from '../../utils';
import {NavigationProp} from '@react-navigation/native';

export default function Inventory({navigation: {navigate}}: NavigationProp) {
  return (
    <View style={styles.container}>
      <InventoryList data={data} />
      <FloatingButton
        onPress={() => {
          navigate(utils.routes.ADD);
        }}
      />
    </View>
  );
}

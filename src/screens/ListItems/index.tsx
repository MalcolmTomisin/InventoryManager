import React from 'react';
import {InventoryList, FloatingButton} from '../../components';
import {View} from 'react-native';
import styles from './style';
import utils from '../../utils';
import {NavigationProp} from '@react-navigation/native';

export default function Inventory({navigation: {navigate}}: NavigationProp) {
  return (
    <View style={styles.container}>
      <InventoryList navigate={navigate} />
      <FloatingButton
        onPress={() => {
          navigate(utils.routes.ADD);
        }}
      />
    </View>
  );
}

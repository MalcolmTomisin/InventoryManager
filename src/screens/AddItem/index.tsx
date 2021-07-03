import React from 'react';
import {ScrollView} from 'react-native';
import {TextInput} from '../../components';
import styles from './style';

export default function AddItem() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Name"
        placeholder="Tomisin Alu"
        containerStyle={styles.input}
          />
        
    </ScrollView>
  );
}

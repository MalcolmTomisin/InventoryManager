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
      <TextInput
        label="Price"
        placeholder="₦ 500"
        containerStyle={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Total stock (Qty)"
        placeholder="65"
        containerStyle={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Description"
        placeholder="..."
        multiline
        containerStyle={styles.input}
      />
    </ScrollView>
  );
}

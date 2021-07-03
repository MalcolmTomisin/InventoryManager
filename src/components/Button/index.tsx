import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {ButtonProps} from '../../types';

export default function Button({label, containerStyle}: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

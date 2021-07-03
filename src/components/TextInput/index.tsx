import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './style';
import utils from '../../utils';
import {InputProps} from '../../types';

export default function Input({
  containerStyle,
  value,
  placeholder,
  label,
  multiline,
  onChangeText,
  keyboardType,
}: InputProps) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {borderBottomColor: focused ? utils.colors.PRIMARY : utils.colors.GREY},
      ]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={[styles.input]}
        placeholderTextColor={styles.placeholder.color}
        multiline={multiline}
        onChangeText={onChangeText}
        onFocus={() => {
          setFocused(true);
        }}
        onEndEditing={() => {
          setFocused(false);
        }}
        keyboardType={keyboardType}
      />
    </View>
  );
}

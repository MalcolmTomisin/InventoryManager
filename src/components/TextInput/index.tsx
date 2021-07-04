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
  error,
  onEndEditing,
}: InputProps) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          {
            borderBottomColor: focused
              ? utils.colors.PRIMARY
              : utils.colors.GREY,
          },
          styles.innerContainer,
        ]}>
        <TextInput
          value={value}
          placeholder={placeholder}
          style={[styles.input, {height: multiline ? 80 : 48}]}
          placeholderTextColor={styles.placeholder.color}
          multiline={multiline}
          onChangeText={onChangeText}
          onFocus={() => {
            setFocused(true);
          }}
          onEndEditing={event => {
            setFocused(false);
            onEndEditing ? onEndEditing(event) : null;
          }}
          keyboardType={keyboardType}
        />
      </View>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

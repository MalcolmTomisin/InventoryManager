import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {TouchableProps as ButtonProps} from '../../types';
import utils from '../../utils';

export default function Button({
  label,
  containerStyle,
  disabled,
  onPress,
  accessibilityLabel,
  accessibilityHint,
}: ButtonProps) {
  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        containerStyle,
        {backgroundColor: disabled ? utils.colors.GREY : utils.colors.PRIMARY},
      ]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FABProps} from '../../types';
import styles from './style';

export default function FAB({
  onPress,
  accessibilityHint,
  accessibilityLabel,
}: FABProps) {
  return (
    <TouchableOpacity
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={styles.fab}>
      <Icon name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

export function TrashButton({
  onPress,
  accessibilityHint,
  accessibilityLabel,
  accessibilityLiveRegion,
}: FABProps) {
  return (
    <TouchableOpacity
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityLiveRegion={accessibilityLiveRegion}
      testID="delete"
      onPress={onPress}
      style={[styles.fab, {backgroundColor: '#F74300'}]}>
      <Icon name="trash" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

import { Dimensions, Platform } from 'react-native';
import {GlobalState} from '../types';

const IS_EMPTY = 0;

export default {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
  randomColor: () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
  },
  routes: {
    HOME: 'Inventory Screen',
    ADD: 'Add Item',
    EDIT: 'Edit Item',
  },
  fonts: {
    GOTHAM: 'GothamMedium',
    AILERON: 'Aileron-Regular',
    AILERON_BOLD: 'Aileron-Bold',
  },
  colors: {
    WHITE: '#FFFFFF',
    INPUT: '#272755',
    PRIMARY: '#1DA1F2',
    GREY: '#9393AA',
  },
  storage_key: '@appState',
  checkEmptyState: (state: GlobalState) => {
    if (state.inventory.length === IS_EMPTY) {
      return true;
    }
    return false;
  },
};

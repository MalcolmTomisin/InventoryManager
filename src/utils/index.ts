import {Dimensions, Platform} from 'react-native';

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
  },
};

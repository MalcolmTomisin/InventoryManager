import {StyleSheet} from 'react-native';
import utils from '../../utils';

export const styles = StyleSheet.create({
  carousel: {
    width: utils.width,
    height: 500,
  },
  items: {
    width: utils.width * 0.8,
    height: 450,
  },
  image: {
    width: utils.width * 0.8,
    height: 400,
  },
  price: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 50,
    width: 50,
  },
  imageContainer: {
    borderTopStartRadius: 22,
    borderTopEndRadius: 22,
    overflow: 'hidden',
  },
});

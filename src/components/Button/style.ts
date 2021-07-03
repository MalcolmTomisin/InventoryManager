import {StyleSheet} from 'react-native';
import utils from '../../utils';

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: utils.width * 0.4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontFamily: utils.fonts.GOTHAM,
    fontSize: 12,
    color: utils.colors.WHITE,
  },
});

export default styles;

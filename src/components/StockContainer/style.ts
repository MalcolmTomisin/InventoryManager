import {StyleSheet} from 'react-native';
import utils from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: utils.width * 0.8 * 0.6,
    height: 32,
    backgroundColor: '#0EAD69',
    borderTopStartRadius: utils.width * 0.8 * 0.9,
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingStart: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontFamily: utils.fonts.GOTHAM,
    fontSize: 11,
    color: utils.colors.WHITE,
    marginRight: 5,
  },
});

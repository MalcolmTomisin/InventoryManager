import {StyleSheet} from 'react-native';
import utils from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: utils.width * 0.8 * 0.6,
    height: 32,
    backgroundColor: '#53D0EC',
    borderTopEndRadius: utils.width * 0.8 * 0.9,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    marginLeft: 5,
  },
});

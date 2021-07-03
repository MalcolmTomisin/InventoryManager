import {StyleSheet} from 'react-native';
import utils from '../../utils';

const styles = StyleSheet.create({
  container: {
    width: utils.width * 0.8,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  input: {
    borderWidth: 0,
    fontSize: 14,
    fontFamily: utils.fonts.AILERON,
    color: utils.colors.INPUT,
  },
  label: {
    fontFamily: utils.fonts.AILERON_BOLD,
    fontSize: 16,
    color: '#000000',
    marginVertical: 5,
  },
  placeholder: {
    color: utils.colors.GREY,
  },
});

export default styles;

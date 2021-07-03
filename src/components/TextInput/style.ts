import {StyleSheet} from 'react-native';
import utils from '../../utils';

const styles = StyleSheet.create({
  container: {
    width: utils.width * 0.85,
    paddingVertical: 5,
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
  },
  placeholder: {
    color: utils.colors.GREY,
  },
  innerContainer: {
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  error: {
    color: '#F74300',
    fontSize: 8,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.light,
    alignItems: 'center',
    paddingLeft: metrics.spaces.space16,
    height: 50,
  },
  label: {
    marginLeft: metrics.spaces.space16,
  },
});

export default styles;

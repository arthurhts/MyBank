import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles/';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.radius,
  },
  label: {
    color: colors.white,
    fontSize: fonts.sizes.big,
    fontFamily: fonts.font.MontserratSemiBold,
  },
});

export default styles;

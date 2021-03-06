import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: Dimensions.get('window').height * 0.2,
  },
  contentHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelBalance: {
    color: colors.white,
  },
  txtBalance: {
    color: colors.white,
    fontFamily: fonts.font.MontserratSemiBold,
    fontSize: fonts.sizes.bigger,
  },
  body: {
    marginVertical: metrics.spaces.space16,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.spaces.space16,
  },
  scrollView: {
    height: 150,
  },
  itemScrooll: {
    backgroundColor: colors.white,
    height: 150,
    width: 150,
    borderRadius: 5,
    padding: metrics.spaces.space16,
    marginLeft: metrics.spaces.space16,
    justifyContent: 'space-between',
  },
  itemTransaction: {
    flexDirection: 'row',
    borderRadius: 5,
    minHeight: 60,
    position: 'relative',
  },
  titleTransacitons: {
    fontFamily: fonts.font.MontserratRegular,
    marginVertical: metrics.spaces.space16,
  },
  descriptionTransaction: {
    fontFamily: fonts.font.MontserratRegular,
  },
  iconTransactionContent: {
    zIndex: 9,
    position: 'absolute',
    backgroundColor: colors.white,
  },
  infoTransactionContent: {
    marginLeft: 40,
  },
  lineTimeLine: {
    width: 1,
    backgroundColor: colors.light,
    height: '100%',
    position: 'absolute',
    left: 16,
    top: 0,
  },
  btnShowMore: {
    marginVertical: metrics.spaces.space24,
  },
});

export default styles;

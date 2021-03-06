import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  conteudoModal: {
    flexGrow: 1,
    paddingHorizontal: metrics.spaces.space16,
    color: colors.dark,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleModal: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bodyModal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAmount: {
    fontSize: fonts.sizes.bigger,
    marginVertical: metrics.spaces.space16,
  },
  txtDate: {},
  txtDescription: {},
});

export default styles;

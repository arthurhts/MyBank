import React from 'react';
import {Text, TextProps} from 'react-native';
import {fonts} from '../../styles';

interface TextMoneyProps extends TextProps {
  value: number;
  installments?: number;
  prefix?: string;
  type: 'MontserratLight' | 'MontserratRegular' | 'MontserratSemiBold';
  style?: Object;
}
export const TextMoney = ({
  value,
  type,
  prefix,
  installments,
  style,
  ...rest
}: TextMoneyProps) => {
  return (
    <Text {...rest} style={{...style, fontFamily: fonts.font[type]}}>
      {installments && installments + 'x '}
      {prefix && prefix + ' '}
      {value
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
    </Text>
  );
};

import React from 'react';
import {Text as TextReactNative, TextProps} from 'react-native';
import {fonts} from '../../styles';

export interface InputProps extends TextProps {
  children?: React.ReactNode;
  type: 'MontserratLight' | 'MontserratRegular' | 'MontserratSemiBold';
  style?: Object;
}

export const Text = ({children, style, type, ...rest}: InputProps) => {
  return (
    <TextReactNative {...rest} style={{fontFamily: fonts.font[type], ...style}}>
      {children}
    </TextReactNative>
  );
};

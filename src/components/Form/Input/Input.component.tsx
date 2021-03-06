import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';

import styles from './Input.styles';

export interface InputProps extends TextInputProps {
  placeholder?: string;
  marginTop?: number;
  marginBottom?: number;
  icon?: React.ReactNode;
}

export const Input = ({
  placeholder,
  marginTop,
  icon,
  marginBottom,
  ...rest
}: InputProps) => {
  return (
    <View {...rest} style={{...styles.container, marginTop, marginBottom}}>
      {icon && icon}
      <TextInput style={styles.label} placeholder={placeholder} />
    </View>
  );
};

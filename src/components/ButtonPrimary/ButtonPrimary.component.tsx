import React from 'react';
import {
  Pressable,
  Text,
  ImageSourcePropType,
  PressableProps,
} from 'react-native';

import styles from './ButtonPrimary.styles';

export interface ButtonPrimaryProps extends PressableProps {
  label?: string;
  imageIcon?: ImageSourcePropType;
  marginTop?: number;
  marginBottom?: number;
  disabled?: boolean;
}

export const ButtonPrimary = ({
  marginTop,
  label,
  marginBottom,
  ...rest
}: ButtonPrimaryProps) => {
  return (
    <Pressable {...rest} style={{...styles.container, marginTop, marginBottom}}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

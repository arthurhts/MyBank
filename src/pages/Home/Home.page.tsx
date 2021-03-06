import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ButtonPrimary} from '../../components/ButtonPrimary/ButtonPrimary.component';
import {Input} from '../../components/Form/Input/Input.component';

import styles from './Home.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {metrics} from '../../styles';
import Icon from 'react-native-vector-icons/Feather';

export const HomePage = () => {
  const navigation = useNavigation();

  const goToMyAccount = React.useCallback(() => {
    navigation.navigate('MyAccount');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Input
          icon={<Icon name="user" size={24} />}
          placeholder="Usuário"
          marginBottom={metrics.spaces.space8}
        />
        <Input
          icon={<Icon name="lock" size={24} />}
          placeholder="Senha"
          marginBottom={metrics.spaces.space16}
        />
        <ButtonPrimary onPress={goToMyAccount} label="Entrar" />
      </View>
    </SafeAreaView>
  );
};

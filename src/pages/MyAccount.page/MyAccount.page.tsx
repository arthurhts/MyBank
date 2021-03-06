import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {
  SafeAreaView,
  View,
  FlatList,
  Pressable,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import {TextMoney} from '../../components/TextMoney/TextMoney.component';
import {Text} from '../../components/Text/Text.component';
import {IState} from '../../store';
import {
  loadAccountRequest,
  openModalTransaction,
} from '../../store/modules/account/actions';
import {IAccount, ITransaction} from '../../store/modules/account/types';

import styles from './MyAccount.styles';
import {colors} from '../../styles';
import {Assets} from '../../assets/Assets';
import {ModalDetailsTransaction} from '../../components/ModalDetailsTransaction/ModalDetailsTransaction.component';

const ItemTransaction = ({id, amount, description}: ITransaction) => {
  const negative = amount.startsWith('-');
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.itemTransaction}
      onPress={() => dispatch(openModalTransaction(id))}>
      <View>
        {negative ? (
          <Icon
            style={styles.iconTransactionContent}
            name="arrow-up"
            size={34}
            color={colors.danger}
          />
        ) : (
          <Icon
            style={styles.iconTransactionContent}
            name="arrow-down"
            size={34}
            color={colors.success}
          />
        )}
        <View style={styles.lineTimeLine} />
      </View>
      <View style={styles.infoTransactionContent}>
        <Text type="MontserratRegular">{description}</Text>
        <Text type="MontserratRegular">
          R$ {Number(amount).toFixed(2).replace('.', ',')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const MyAccountPage = () => {
  const dispatch = useDispatch();
  const [showNumTransactions, setShowNumTransactions] = React.useState(3);

  const account = useSelector<IState, IAccount | null>(
    (state) => state.account.data,
  );
  const isLoading = useSelector<IState, boolean>(
    (state) => state.account.loading,
  );

  React.useEffect(() => {
    dispatch(loadAccountRequest());
  }, [dispatch]);

  const showAllTransactions = React.useCallback(() => {
    setShowNumTransactions(account?.transactions.length ?? 0);
  }, [setShowNumTransactions, account]);

  return (
    <>
      <ModalDetailsTransaction />
      <View style={styles.header}>
        <SafeAreaView style={styles.contentHeader}>
          {isLoading ? (
            <ContentLoader backgroundColor="#fff" foregroundColor="#999">
              <Rect x="40%" y="30%" rx="3" ry="3" width="20%" height="15" />
              <Rect x="30%" y="50%" rx="3" ry="3" width="40%" height="25" />
            </ContentLoader>
          ) : (
            <>
              <Text style={styles.labelBalance} type="MontserratSemiBold">
                Meu Saldo
              </Text>
              <TextMoney
                type="MontserratSemiBold"
                style={styles.txtBalance}
                prefix="R$"
                value={Number(account?.balance)}
              />
            </>
          )}
        </SafeAreaView>
      </View>
      <View style={styles.body}>
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.itemScrooll}>
            <Image source={Assets.icons.pix} />
            <Text type="MontserratSemiBold">Pix</Text>
          </View>
          <View style={styles.itemScrooll}>
            <Image source={Assets.icons.arrowUp} />
            <Text type="MontserratSemiBold">Depositar</Text>
          </View>
          <View style={styles.itemScrooll}>
            <Image source={Assets.icons.arrowDown} />
            <Text type="MontserratSemiBold">Sacar</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <SafeAreaView>
          <Text type="MontserratSemiBold" style={styles.titleTransacitons}>
            Histórico de transações
          </Text>
          {isLoading ? (
            <ContentLoader backgroundColor="#fff" foregroundColor="#cecece">
              <Rect x="0" y="0" rx="3" ry="3" width="100%" height="50" />
              <Rect x="0" y="66" rx="3" ry="3" width="100%" height="50" />
              <Rect x="0" y="132" rx="3" ry="3" width="100%" height="50" />
            </ContentLoader>
          ) : (
            <>
              <FlatList<ITransaction>
                data={account?.transactions.slice(0, showNumTransactions)}
                renderItem={({item}) => <ItemTransaction {...item} />}
                keyExtractor={(item) => item.id}
              />
              <Pressable
                style={styles.btnShowMore}
                onPress={showAllTransactions}>
                <Text
                  type="MontserratSemiBold"
                  style={{color: colors.secondary}}>
                  Mostrar Mais
                </Text>
              </Pressable>
            </>
          )}
        </SafeAreaView>
      </View>
    </>
  );
};

import React from 'react';
import {View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../store';
import {closeModalTransaction} from '../../store/modules/account/actions';
import {ITransaction} from '../../store/modules/account/types';
import Icon from 'react-native-vector-icons/Feather';
import {format} from 'date-fns';

import styles from './ModalDetailsTransaction.styles';
import {colors} from '../../styles';
import {Text} from '../Text/Text.component';

export const ModalDetailsTransaction = () => {
  const dispatch = useDispatch();
  const [transaction, setTransaction] = React.useState<ITransaction>();
  const [negative, setNegative] = React.useState<boolean>();

  const modalRef = React.useRef<Modalize>(null);

  const open = useSelector<IState, boolean>(
    (state) => state.account.openModalTransaction,
  );

  const idTransaction = useSelector<IState, string | null>(
    (state) => state.account.idTransactionDetails,
  );

  const transactions = useSelector<IState, ITransaction[] | undefined>(
    (state) => state.account.data?.transactions,
  );

  React.useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      if (open) {
        modal.open();
      } else {
        modal.close();
      }
    }
  }, [open]);

  const convertDate = (dateString: string): React.ReactNode => {
    if (dateString) {
      const dateTime = dateString.split('T');
      console.log(dateTime);
      var date = new Date(dateTime[0]);
      let dataFormatada = format(date, 'dd/MM/yyyy');

      return dataFormatada;
    }
  };

  React.useEffect(() => {
    if (idTransaction) {
      const _transaction = transactions!.find(
        (item) => item.id === idTransaction,
      );

      setNegative(_transaction?.amount.startsWith('-'));
      setTransaction(_transaction);
    }
  }, [idTransaction, transactions]);

  return (
    <Modalize
      ref={modalRef}
      adjustToContentHeight={true}
      modalStyle={styles.styleModal}
      onClose={() => dispatch(closeModalTransaction())}>
      <View style={styles.conteudoModal}>
        <View style={styles.bodyModal}>
          {negative ? (
            <Icon name="arrow-up" size={34} color={colors.danger} />
          ) : (
            <Icon name="arrow-down" size={34} color={colors.success} />
          )}
          <Text type="MontserratSemiBold" style={styles.txtAmount}>
            R$ {Number(transaction?.amount).toFixed(2).replace('.', ',')}
          </Text>
          <Text type="MontserratRegular" style={styles.txtDate}>
            {convertDate(transaction?.date!)}
          </Text>

          <Text type="MontserratRegular" style={styles.txtDescription}>
            {transaction?.description}
          </Text>
        </View>
      </View>
    </Modalize>
  );
};

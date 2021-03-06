import produce from 'immer';
import {Reducer} from 'redux';
import {IAccountState, ActionTypesAccount} from './types';

const INITIAL_STATE: IAccountState = {
  data: null,
  loading: false,
  error: false,
  openModalTransaction: false,
  idTransactionDetails: null,
};

const account: Reducer<IAccountState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypesAccount.LOAD_REQUEST: {
        draft.loading = true;
        draft.error = false;

        break;
      }
      case ActionTypesAccount.LOAD_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload;
        break;
      }
      case ActionTypesAccount.LOAD_FAILURE: {
        draft.loading = false;
        draft.error = true;

        break;
      }
      case ActionTypesAccount.OPEN_MODAL_TRANSACTION: {
        draft.openModalTransaction = true;
        draft.idTransactionDetails = action.payload;
        break;
      }
      case ActionTypesAccount.CLOSE_MODAL_TRANSACTION: {
        draft.openModalTransaction = false;
        draft.idTransactionDetails = null;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default account;

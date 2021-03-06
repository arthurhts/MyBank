import {action} from 'typesafe-actions';
import {ActionTypesAccount, IAccount} from './types';

export const loadAccountRequest = () => action(ActionTypesAccount.LOAD_REQUEST);

export const loadAccountSuccess = (data: IAccount) =>
  action(ActionTypesAccount.LOAD_SUCCESS, data);

export const loadAccountFailure = () => action(ActionTypesAccount.LOAD_FAILURE);

export const openModalTransaction = (id: string) =>
  action(ActionTypesAccount.OPEN_MODAL_TRANSACTION, id);

export const closeModalTransaction = () =>
  action(ActionTypesAccount.CLOSE_MODAL_TRANSACTION);

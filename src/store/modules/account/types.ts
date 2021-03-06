//ACTIONS TYPES
export enum ActionTypesAccount {
  LOAD_REQUEST = '@account/LOAD_REQUEST',
  LOAD_SUCCESS = '@account/LOAD_SUCCESS',
  LOAD_FAILURE = '@account/LOAD_FAILURE',
  OPEN_MODAL_TRANSACTION = '@transaction/OPEN_MODAL_TRANSACTION',
  CLOSE_MODAL_TRANSACTION = '@transaction/CLOSE_MODAL_TRANSACTION',
}

//DATA TYPES
export interface ITransaction {
  id: string;
  date: string;
  description: string;
  amount: string;
}

export interface IAccount {
  id: string;
  name: string;
  balance: string;
  transactions: [];
}

//STATE TYPE
export interface IAccountState {
  readonly data: IAccount | null;
  readonly loading: boolean;
  readonly error: boolean;
  readonly openModalTransaction: boolean;
  readonly idTransactionDetails: string | null;
}

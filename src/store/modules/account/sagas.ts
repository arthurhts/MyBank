import {AxiosResponse} from 'axios';
import {call, put, all, takeLatest, delay} from 'redux-saga/effects';
import api from '../../../services/api';
import {loadAccountSuccess, loadAccountFailure} from './actions';
import {IAccount, ActionTypesAccount} from './types';

export function* load() {
  try {
    const response: AxiosResponse<IAccount> = yield call(
      api.get,
      '/accountSummary',
    );

    yield delay(3000);
    yield put(loadAccountSuccess(response.data));
  } catch (error) {
    yield put(loadAccountFailure());
  }
}

export default all([takeLatest(ActionTypesAccount.LOAD_REQUEST, load)]);

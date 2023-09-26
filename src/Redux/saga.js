// saga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from './actions';

function* fetchDataSaga() {
  try {
    const response = yield call(fetch, 'https://mocki.io/v1/69d14fe3-be0b-4157-ac0e-c1261b36f2a6');
    const result = yield response.json();
    yield put(fetchDataSuccess(result.questions));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}

// saga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from './actions';

function* fetchDataSaga() {
  try {
    const response = yield call(fetch, 'https://mocki.io/v1/754f3274-355b-463b-88b5-a3307de99054');
    const result = yield response.json();
    yield put(fetchDataSuccess(result.questions));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}


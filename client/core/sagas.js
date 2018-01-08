import { all, fork } from 'redux-saga/effects';
import sequenceSaga from "./modules/sequence/sequenceSaga";
import squaresSaga from "./modules/squares/squaresSaga";

export default function* rootSaga() {
  yield all([
      fork(sequenceSaga),
      fork(squaresSaga),
  ]);
}

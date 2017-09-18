import { takeEvery, put, select } from 'redux-saga/effects';
import actions from '../actions';

function* decrement() {
  const percentState = yield select(state => state.progress);
  let percent = percentState - 20;

  if (percent < 0) {
    percent = 0;

    yield put(actions.notify.error('Min is 0!'));
  }

  yield put(actions.progress.decremented(percent));
}

function* increment() {
  const percentState = yield select(state => state.progress);
  let percent = percentState + 20;

  if (percent > 100) {
    percent = 100;

    yield put(actions.notify.error('Maximum is 100!'));
  }

  yield put(actions.progress.incremented(percent));
}

export default function* () {
  yield takeEvery(actions.progress.decrement, decrement);
  yield takeEvery(actions.progress.increment, increment);
}

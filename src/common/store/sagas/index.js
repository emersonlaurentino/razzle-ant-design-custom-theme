import { fork, all } from 'redux-saga/effects';
import { map, unary } from 'lodash/fp';
import progress from './progress';

export default function* () {
  const _sagas = [
    progress,
  ];

  yield all(map(unary(fork), _sagas));
}

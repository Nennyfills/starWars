/* eslint-disable max-len */
import { all } from 'redux-saga/effects';

import {
  watchGetPeopleRequest, watchOpenModalRequest,
  watchCloseModalRequest,
} from './modules/starWars/getAllPeople';

import {
  watchGetFieldRequest,
} from './modules/starWars/getAllField';

export default function* rootSaga() {
  yield all([
    watchGetPeopleRequest(),
    watchOpenModalRequest(),
    watchCloseModalRequest(),
    watchGetFieldRequest(),
  ]);
}

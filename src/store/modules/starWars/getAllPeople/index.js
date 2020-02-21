/* eslint-disable no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILURE,
  GET_EACH_PERSON_FILED_REQUEST,
  GET_EACH_PERSON_FILED_SUCCESS,
  GET_EACH_PERSON_FILED_FAILURE,
  OPEN_MODAL_REQUEST,
  OPEN_MODAL_SUCCESS,
  OPEN_MODAL_FAILURE,
  CLOSE_MODAL_REQUEST,
  CLOSE_MODAL_SUCCESS,
  CLOSE_MODAL_FAILURE,
} from './types';
import API from './request';

export const getPeopleRequest = (payload) => ({
  type: GET_PEOPLE_REQUEST,
  payload,
});
export const getPeopleSuccess = (payload) => ({
  type: GET_PEOPLE_SUCCESS,
  payload,
});
export const getPeopleFailure = (payload) => ({
  type: GET_PEOPLE_FAILURE,
  payload,
});
export const getEachPersonFiledRequest = (payload) => ({
  type: GET_EACH_PERSON_FILED_REQUEST,
  payload,
});
export const getEachPersonFiledSuccess = (payload) => ({
  type: GET_EACH_PERSON_FILED_SUCCESS,
  payload,
});
export const getEachPersonFiledFailure = (payload) => ({
  type: GET_EACH_PERSON_FILED_FAILURE,
  payload,
});

export const openModalRequest = (payload) => ({
  type: OPEN_MODAL_REQUEST,
  payload,
});
export const openModalSuccess = (payload) => ({
  type: OPEN_MODAL_SUCCESS,
  payload,
});
export const openModalFailure = (payload) => ({
  type: OPEN_MODAL_FAILURE,
  payload,
});

export const closeModalRequest = (payload) => ({
  type: CLOSE_MODAL_REQUEST,
  payload,
});
export const closeModalSuccess = (payload) => ({
  type: CLOSE_MODAL_SUCCESS,
  payload,
});
export const closeModalFailure = (payload) => ({
  type: CLOSE_MODAL_FAILURE,
  payload,
});

export function* getPeopleWorker(action) {
  try {
    const getPeopleResponse = yield call(API.getPeople, action.payload);
    const {
      data, status, next, previous,
    } = getPeopleResponse;
    yield put(getPeopleSuccess({
      data, status, next, previous,
    }));
  } catch (errors) {
    const response = errors.response && errors.message
      ? errors.response.data.detail : errors.message;
    yield put(getPeopleFailure(response));
  }
}
export function* watchGetPeopleRequest() {
  yield takeLatest(GET_PEOPLE_REQUEST, getPeopleWorker);
}

export function* openModalWorker(action) {
  try {
    yield put(openModalSuccess());
  } catch (errors) {
    yield put(openModalFailure(errors));
  }
}
export function* watchOpenModalRequest() {
  yield takeLatest(OPEN_MODAL_REQUEST, openModalWorker);
}

export function* closeModalWorker(action) {
  try {
    yield put(closeModalSuccess());
  } catch (errors) {
    yield put(closeModalFailure(errors));
  }
}
export function* watchCloseModalRequest() {
  yield takeLatest(CLOSE_MODAL_REQUEST, closeModalWorker);
}

const initialState = {
  data: [],
  error: null,
  loading: false,
  modal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_PEOPLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case OPEN_MODAL_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case OPEN_MODAL_SUCCESS:
      return {
        ...state,
        modal: true,
        loading: false,
        error: null,
      };
    case OPEN_MODAL_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLOSE_MODAL_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case CLOSE_MODAL_SUCCESS:
      return {
        ...state,
        modal: false,
        loading: false,
        error: null,
      };
    case CLOSE_MODAL_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

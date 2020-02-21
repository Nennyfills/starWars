import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_EACH_PERSON_FILED_REQUEST,
  GET_EACH_PERSON_FILED_SUCCESS,
  GET_EACH_PERSON_FILED_FAILURE,
} from './types';
import API from './request';

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

export function* getFieldWorker(action) {
  try {
    const getFieldResponse = yield call(API.getField, action.payload);
    const { data, status } = getFieldResponse;
    yield put(getEachPersonFiledSuccess({ data, status }));
  } catch (errors) {
    const response = errors.response && errors.message
      ? errors.response.data.detail : errors.message;
    yield put(getEachPersonFiledFailure(response));
  }
}
export function* watchGetFieldRequest() {
  yield takeLatest(GET_EACH_PERSON_FILED_REQUEST, getFieldWorker);
}

const initialState = {
  eachData: [],
  error: null,
  loading: false,
  modal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EACH_PERSON_FILED_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_EACH_PERSON_FILED_SUCCESS:
      return {
        ...state,
        eachData: action.payload,
        loading: false,
        error: null,
      };
    case GET_EACH_PERSON_FILED_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

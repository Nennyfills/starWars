import { runSaga } from 'redux-saga';
import sinon from 'sinon';

import http from '../../../../utils/http';

import {
  getEachPersonFiledRequest,
  getEachPersonFiledSuccess,
  getEachPersonFiledFailure,
  getFieldWorker,
} from './index';

import {
  GET_EACH_PERSON_FILED_REQUEST,
  GET_EACH_PERSON_FILED_SUCCESS,
  GET_EACH_PERSON_FILED_FAILURE,
} from './types';

describe('Get field action', () => {
  beforeEach(() => {
    if (http.get.restore) http.get.restore();
  });

  it('should get all field', async () => {
    const dispatched = [];
    const postStub = sinon.stub(http, 'get').resolves({
      status: 200,
      statusText: 'OK',
      data: 'data just came in',
      responseBody: 'Wills',
    });
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getFieldWorker,
      getEachPersonFiledSuccess({
        name: 'Luke Skywalker',
      }),
    ).toPromise();

    expect(postStub.calledOnce).toEqual(true);
    expect(dispatched[0].type).toEqual(GET_EACH_PERSON_FILED_SUCCESS);
    expect(dispatched[0].payload.data).toEqual(
      'data just came in',
    );
  });
  it('should not get all field', async () => {
    const dispatched = [];
    const error = new Error('Request failed with status code 400');
    const postStub = sinon.stub(http, 'get').rejects(error);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getFieldWorker,
      getEachPersonFiledFailure({
        url: 'https://swapi.co/api/people/1/',
      }),
    ).toPromise();

    expect(postStub.calledOnce).toEqual(true);
    expect(dispatched[0].type).toEqual(GET_EACH_PERSON_FILED_FAILURE);
    expect(dispatched[0].payload).toEqual(
      'Request failed with status code 400',
    );
  });

  it('should check if the field loading action is been dispatched', async () => {
    const payload = { url: 'https://swapi.co/api/people/1/' };
    const newAction = getEachPersonFiledRequest(payload);

    expect(newAction.type).toEqual(GET_EACH_PERSON_FILED_REQUEST);
  });

  it('should check if the field is requesting an action to been dispatched', async () => {
    const payload = { url: 'https://swapi.co/api/people/1/' };
    const newAction = getEachPersonFiledRequest(payload);

    expect(newAction.type).toEqual(GET_EACH_PERSON_FILED_REQUEST);
  });

  it('should check if receive field action is been dispatched', async () => {
    const payload = { url: 'https://swapi.co/api/people/1/' };
    const newAction = getEachPersonFiledSuccess(payload);

    expect(newAction.type).toEqual(GET_EACH_PERSON_FILED_SUCCESS);
    expect(newAction.payload.url).toEqual('https://swapi.co/api/people/1/');
  });

  it('should check if receive error action is been dispatched', async () => {
    const payload = { url: 'https://swapi.co/api/people/1/' };
    const newAction = getEachPersonFiledFailure(payload);

    expect(newAction.type).toEqual(GET_EACH_PERSON_FILED_FAILURE);
    expect(newAction.payload.url).toEqual('https://swapi.co/api/people/1/');
  });
});

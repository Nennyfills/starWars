import { runSaga } from 'redux-saga';
import sinon from 'sinon';

import http from '../../../../utils/http';

import {
  getPeopleRequest,
  getPeopleSuccess,
  getPeopleFailure,
  getPeopleWorker,
  openModalWorker,
  openModalRequest,
  openModalSuccess,
  openModalFailure,
  closeModalRequest,
  closeModalSuccess,
  closeModalFailure,
  closeModalWorker,
} from './index';

import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILURE,
  OPEN_MODAL_REQUEST,
  OPEN_MODAL_SUCCESS,
  OPEN_MODAL_FAILURE,
  CLOSE_MODAL_REQUEST,
  CLOSE_MODAL_SUCCESS,
  CLOSE_MODAL_FAILURE,

} from './types';

describe('Get action', () => {
  beforeEach(() => {
    if (http.get.restore) http.get.restore();
  });

  it('should get all', async () => {
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
      getPeopleWorker,
      getPeopleSuccess({
        name: 'Luke Skywalker',
      }),
    ).toPromise();

    expect(postStub.calledOnce).toEqual(true);
    expect(dispatched[0].type).toEqual(GET_PEOPLE_SUCCESS);
    expect(dispatched[0].payload.data).toEqual(
      'data just came in',
    );
  });
  it('should not get all people', async () => {
    const dispatched = [];
    const error = new Error('Request failed with status code 400');
    const postStub = sinon.stub(http, 'get').rejects(error);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getPeopleWorker,
      getPeopleFailure({
        data: 'create',
      }),
    ).toPromise();

    expect(postStub.calledOnce).toEqual(true);
    expect(dispatched[0].type).toEqual(GET_PEOPLE_FAILURE);
    expect(dispatched[0].payload).toEqual(
      'Request failed with status code 400',
    );
  });

  it('should check if the loading action is been dispatched', async () => {
    const payload = { data: 'create' };
    const newAction = getPeopleRequest(payload);

    expect(newAction.type).toEqual(GET_PEOPLE_REQUEST);
  });

  it('should check if the is requesting an action to been dispatched', async () => {
    const payload = { data: 'create' };
    const newAction = getPeopleRequest(payload);

    expect(newAction.type).toEqual(GET_PEOPLE_REQUEST);
  });

  it('should check if receive action is been dispatched', async () => {
    const payload = { data: 'create' };
    const newAction = getPeopleSuccess(payload);

    expect(newAction.type).toEqual(GET_PEOPLE_SUCCESS);
    expect(newAction.payload.data).toEqual('create');
  });

  it('should check if receive error action is been dispatched', async () => {
    const payload = { data: 'create' };
    const newAction = getPeopleFailure(payload);

    expect(newAction.type).toEqual(GET_PEOPLE_FAILURE);
    expect(newAction.payload.data).toEqual('create');
  });
  it('should get modal success', async () => {
    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      openModalWorker,
      openModalSuccess(),
    ).toPromise();

    expect(dispatched[0].type).toEqual(OPEN_MODAL_SUCCESS);
  });
  it('should check if the is requesting an action to been dispatched', async () => {
    const newAction = openModalRequest();

    expect(newAction.type).toEqual(OPEN_MODAL_REQUEST);
  });

  it('should check if receive action is been dispatched', async () => {
    const newAction = openModalSuccess();

    expect(newAction.type).toEqual(OPEN_MODAL_SUCCESS);
  });

  it('should check if receive error action is been dispatched', async () => {
    const newAction = openModalFailure();

    expect(newAction.type).toEqual(OPEN_MODAL_FAILURE);
  });
  it('should get close modal success', async () => {
    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      closeModalWorker,
      closeModalSuccess(),
    ).toPromise();

    expect(dispatched[0].type).toEqual(CLOSE_MODAL_SUCCESS);
  });
  it('should check if the is requesting an action to been dispatched', async () => {
    const newAction = closeModalRequest();

    expect(newAction.type).toEqual(CLOSE_MODAL_REQUEST);
  });

  it('should check if receive action is been dispatched', async () => {
    const newAction = closeModalSuccess();

    expect(newAction.type).toEqual(CLOSE_MODAL_SUCCESS);
  });

  it('should check if receive error action is been dispatched', async () => {
    const newAction = closeModalFailure();

    expect(newAction.type).toEqual(CLOSE_MODAL_FAILURE);
  });
});

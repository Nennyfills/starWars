import mainReducer, {
  getEachPersonFiledRequest,
  getEachPersonFiledSuccess,
  getEachPersonFiledFailure,
} from './index';

describe('Reducers', () => {
  it('should check if reducer is loading while getting field', async () => {
    const initialState = {
      eachData: [],
      error: null,
      loading: false,
      modal: false,
    };
    const newState = mainReducer(initialState, getEachPersonFiledRequest());

    expect(newState.eachData).toEqual([]);
    expect(newState.loading).toEqual(true);
  });
  it('should check if reducer is getting user field', async () => {
    const initialState = {
      eachData: [],
      error: null,
      loading: false,
      modal: false,
    };
    const payload = {
      userName: 'chuckss',
      status: 200,
    };
    const newState = mainReducer(
      initialState,
      getEachPersonFiledSuccess(payload),
    );
    expect(newState.eachData.userName).toEqual('chuckss');
    expect(newState.eachData.status).toEqual(200);
    expect(newState.loading).toEqual(false);
  });

  it('should check if reducer is getting an error while receiving field detail', async () => {
    const initialState = {
      eachData: [],
      error: null,
      loading: false,
      modal: false,
    };
    const errorPayload = {
      userDetail: [],
      error: 'wrong id',
      status: 400,
    };
    const newState = mainReducer(
      initialState,
      getEachPersonFiledFailure(errorPayload),
    );
    expect(newState.error.error).toEqual('wrong id');
    expect(newState.error.status).toEqual(400);
    expect(newState.loading).toEqual(false);
  });
});

describe('Update user field', () => {
  it('should check if reducer is loading while updating user field', async () => {
    const initialState = {
      eachData: [],
      error: null,
      loading: false,
      modal: false,
    };
    const newState = mainReducer(initialState, getEachPersonFiledRequest());

    expect(newState.eachData).toEqual([]);
    expect(newState.loading).toEqual(true);
  });

  it('should check if reducer is updating field', async () => {
    const initialState = {
      eachData: [],
      error: null,
      loading: false,
      modal: false,
    };
    const payload = {
      userName: 'chuckss',
      status: 200,
    };
    const newState = mainReducer(
      initialState,
      getEachPersonFiledSuccess(payload),
    );

    expect(newState.eachData.userName).toEqual('chuckss');
    expect(newState.eachData.status).toEqual(200);
    expect(newState.loading).toEqual(false);
  });

  it('should check if reducer is getting an error while updating field detail', async () => {
    const initialState = {
      eacheachData: [],
      error: null,
      loading: false,
      modal: false,
    };
    const errorPayload = {
      userDetail: [],
      error: 'wrong id',
      status: 400,
    };
    const newState = mainReducer(
      initialState,
      getEachPersonFiledFailure(errorPayload),
    );
    expect(newState.error.userDetail).toEqual([]);
    expect(newState.error.error).toEqual('wrong id');
    expect(newState.error.status).toEqual(400);
    expect(newState.loading).toEqual(false);
  });

  it('should test reducer default state', async () => {
    const initialState = {
      eachData: [],
      error: null,
      loading: false,
      modal: false,
    };
    const newState = mainReducer(initialState, {});
    expect(newState.eachData).toEqual([]);
    expect(newState.loading).toEqual(false);
    expect(newState.error).toEqual(null);
  });
});

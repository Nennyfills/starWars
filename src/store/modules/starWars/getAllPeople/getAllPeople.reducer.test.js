import mainReducer, {
  getPeopleRequest,
  getPeopleSuccess,
  getPeopleFailure,
  openModalRequest,
  openModalSuccess,
  openModalFailure,
  closeModalRequest,
  closeModalSuccess,
  closeModalFailure,
} from './index';

describe('Reducers', () => {
  it('should check if reducer is loading while getting people', async () => {
    const initialState = {
      data: [],
      error: null,
      loading: false,
      modal: false,
    };
    const newState = mainReducer(initialState, getPeopleRequest());

    expect(newState.data).toEqual([]);
    expect(newState.loading).toEqual(true);
  });
  it('should check if reducer is getting get people', async () => {
    const initialState = {
      data: [],
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
      getPeopleSuccess(payload),
    );
    expect(newState.data.userName).toEqual('chuckss');
    expect(newState.data.status).toEqual(200);
    expect(newState.loading).toEqual(false);
  });

  it('should check if reducer is getting an error while receiving people detail', async () => {
    const initialState = {
      data: [],
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
      getPeopleFailure(errorPayload),
    );
    expect(newState.error.error).toEqual('wrong id');
    expect(newState.error.status).toEqual(400);
    expect(newState.loading).toEqual(false);
  });
  it('should check if reducer is loading while getting open modal', async () => {
    const initialState = {
      data: [],
      error: null,
      loading: false,
      modal: false,
    };
    const newState = mainReducer(initialState, openModalRequest());

    expect(newState.data).toEqual([]);
    expect(newState.loading).toEqual(true);
    expect(newState.modal).toEqual(false);
  });
  it('should check if reducer is getting get open modal', async () => {
    const initialState = {
      data: [],
      error: null,
      loading: false,
      modal: false,
    };
    const newState = mainReducer(
      initialState,
      openModalSuccess(),
    );
    expect(newState.loading).toEqual(false);
    expect(newState.modal).toEqual(true);
  });

  it('should check if reducer is getting an error while receiving open modal detail', async () => {
    const initialState = {
      data: [],
      error: null,
      loading: false,
      modal: false,
    };
    const errorPayload = {
      error: 'error',
      status: 400,
    };
    const newState = mainReducer(
      initialState,
      openModalFailure(errorPayload),
    );
    expect(newState.error.error).toEqual('error');
    expect(newState.error.status).toEqual(400);
    expect(newState.modal).toEqual(false);
  });
  it('should check if reducer is loading while getting close modal', async () => {
    const initialState = {
      data: [],
      error: null,
      loading: false,
      modal: false,
    };
    const newState = mainReducer(initialState, closeModalRequest());

    expect(newState.loading).toEqual(true);
    expect(newState.modal).toEqual(false);
  });
  it('should check if reducer is getting get close modal', async () => {
    const initialState = {
      data: [],
      error: null,
      loading: false,
      modal: true,
    };
    const newState = mainReducer(
      initialState,
      closeModalSuccess(),
    );
    expect(newState.loading).toEqual(false);
  });

  it('should check if reducer is getting an error while receiving close modal detail', async () => {
    const initialState = {
      data: [],
      error: null,
      loading: false,
      modal: false,
    };
    const errorPayload = {
      error: 'error',
      status: 400,
    };
    const newState = mainReducer(
      initialState,
      closeModalFailure(errorPayload),
    );
    expect(newState.error.error).toEqual('error');
    expect(newState.error.status).toEqual(400);
    expect(newState.modal).toEqual(false);
  });
});

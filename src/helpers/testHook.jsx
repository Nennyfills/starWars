import React from 'react';
import { Provider } from 'react-redux';
import mockStore from '../../tests/fixtures/store';

const TestHook = ({ callback }) => {
  callback();
  return null;
};
  // const testForm = {
  //   getEachPersonFiledRequest: jest.fn(() => (result) => result),
  //   getPeopleRequest: jest.fn(() => (result) => result),
  // };

const store = mockStore({
  data: {
    loading: false,
    data: [{
      firstName: 'James',
      lastName: 'James',
      age: 21,
      birthday: 'feb 04 2304 tue utc',
    },
    ],
    errors: null,
  },
  eachData: {
    loading: false,
    data: [{
      firstName: 'James',
      lastName: 'James',
      age: 21,
      birthday: 'feb 04 2304 tue utc',
    },
    ],
    errors: null,
  },
});

const testHook = (callback) => {
  mount(<Provider store={store}><TestHook callback={callback} /></Provider>);
};

export default testHook;

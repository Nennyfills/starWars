/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import mockStore from '../../../tests/fixtures/store';

import Home from './index';
import Button from '../../components/Button';

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

let props;
let wrapper;
beforeEach(() => {
  props = {
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
    getPeopleRequest: jest.fn(),
    getEachPersonFiledRequest: jest.fn(),
  };
  wrapper = shallow(
    <Provider store={store}>
      <Home {...props}>
        <div className="home" />
      </Home>
    </Provider>,
  );
});

describe('Test Home', () => {
  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should ascertain that all the div are existing', () => {
    expect(wrapper.find('.home')).toHaveLength(1);
  });

  it('should click to get each film', () => {
    const button = shallow(<Button name="film" handleClick={props.getEachPersonFiledRequest} />);
    button.simulate('click');
    expect(button.find('name').toEqual('film'));
  });
});

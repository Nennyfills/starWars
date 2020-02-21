import React from 'react';

import Spinner from './index';


describe('Spinner Component', () => {
  it('should mount the spinner wrapper', () => {
    const wrapper = mount(<Spinner />);

    expect(wrapper.find('.spinner')).toBeDefined();
    expect(wrapper.find('.spinner-sector')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});

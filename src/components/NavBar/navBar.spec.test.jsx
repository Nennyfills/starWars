import React from 'react';

import NavBar from './index';

describe('NavBar Component', () => {
  it('should mount the NavBar wrapper', () => {
    const wrapper = mount(<NavBar />);

    expect(wrapper.find('.nav')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});

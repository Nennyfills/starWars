import React from 'react';

import Footer from './index';


describe('Footer Component', () => {
  it('should mount the Footer wrapper', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find('.footer')).toBeDefined();
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('.vertical_design')).toBeDefined();
  });
});

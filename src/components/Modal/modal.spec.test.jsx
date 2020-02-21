import React from 'react';

import Modal from './index';


describe('InfoBox Component', () => {
  it('should mount the InfoBox wrapper', () => {
    const wrapper = mount(<Modal />);

    expect(wrapper.find('.div')).toBeDefined();
    // expect(wrapper.find('.error')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});

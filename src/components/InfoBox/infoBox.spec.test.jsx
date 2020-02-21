import React from 'react';

import InfoBox from './index';


describe('InfoBox Component', () => {
  it('should mount the InfoBox wrapper', () => {
    const wrapper = mount(<InfoBox />);

    expect(wrapper.find('.infoBox')).toBeDefined();
    expect(wrapper.find('.error')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});

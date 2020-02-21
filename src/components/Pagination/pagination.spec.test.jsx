import React from 'react';

import Pagination from './index';


describe('pagination Component', () => {
  it('should mount the pagination wrapper', () => {
    const wrapper = mount(<Pagination />);

    expect(wrapper.find('.pagination')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});

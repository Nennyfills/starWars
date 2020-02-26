import React from 'react';

import Button from './index';

describe('Button', () => {
  const mockFn = jest.fn();

  it('should render correctly', () => {
    const tree = shallow(
      <Button name="button test" />,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should have a button value', () => {
    const tree = shallow(
      <Button name="function" />,
    );
    expect(typeof (tree.find('input').name)).toBe('function');
    expect(tree.find('input').name).toBeInstanceOf(Function);
  });
  it('should call mock function when button is clicked', () => {
    const tree = shallow(
      <Button name="button test" handleClick={mockFn} />,
    );
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});

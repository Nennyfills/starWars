import React from 'react';
import renderer from 'react-test-renderer';

import { Card } from './index';

describe('Card Component', () => {
  it('should mount the card wrapper', () => {
    const wrapper = mount(<Card />);
    const component = renderer.create(
      <Card
        horizontal={false}
        name="will"
        birthYear={2011}
        gender="male"
        openModal={() => true}
        films="films"
        species="species"
        vehicles="vehicles"
        starShip="starShips"
        showEachFilm="starShips"
        showEachSpecies="showEachSpecies"
        showEachStarShips="showEachStarShips"
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('.card')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from './index';

it('renders properly', () => {
  const wrapper = shallow(<MemoryRouter><App /></MemoryRouter>);

  expect(wrapper.find('Provider')).toBeTruthy();
  expect(wrapper.find('NavBar')).toBeTruthy();
  expect(wrapper.find('Home')).toBeTruthy();
  expect(wrapper.find('Footer')).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});
// it('should render not found for invalid route', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={['/notFound']} initialIndex={0}>
//       <App />
//     </MemoryRouter>
//   );
//   expect(wrapper.contains(<h3>This page is not found.</h3>)).toBe(true);
// });

// it('should visit the password reset page', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={['/password-reset']} initialIndex={0}>
//       <App />
//     </MemoryRouter>
//   );

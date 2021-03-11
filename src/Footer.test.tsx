import React from 'react';
// import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// describe('Footer', () => {
//   it('renders correctly', () => {
//     const tree = renderer.create(<Footer />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })


test('renders Footer', () => {
  render(<Footer />);
  const textElement = screen.getByText(/Made with React/i);
  expect(textElement).toBeInTheDocument();
});

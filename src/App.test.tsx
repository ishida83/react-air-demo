import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/A better way to enjoy every day./i);
  expect(linkElement).toBeInTheDocument();
});

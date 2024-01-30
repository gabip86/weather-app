import React from 'react';
import { render, screen } from '@testing-library/react';
import { Weather } from '../pages/Weather';

test('renders learn react link', () => {
  render(<Weather />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

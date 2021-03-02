import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import IUsers from './models/IUsers';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const title = getByText(/List of users/i);
  expect(title).toBeInTheDocument();
});

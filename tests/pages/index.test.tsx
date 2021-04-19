import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../src/pages/index';

test('renders text hello world', () => {
  const { getByText } = render(<Home />);
  const text = getByText(/Hello/);

  expect(text).toBeInTheDocument();
});

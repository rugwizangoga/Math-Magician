import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';

it('Home renders correctly', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});

it('Home user interaction', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  const Element = screen.getByText('Welcome to our page');
  expect(Element).toBeInTheDocument();
});

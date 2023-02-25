import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/pages/calculator';

it('Calculator renders correctly', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
it('Calculator user interaction', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const Element = screen.getByText('Let\'s do some math!');
  expect(Element).toBeInTheDocument();
});

test('clicking button 7 should display the output', () => {
  const { getByTestId } = render(<Calculator />);
  const button7 = getByTestId('seven');

  expect(button7.textContent).toBe('7');
});

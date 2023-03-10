import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('Header renders accurately', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const Element = screen.getByText('Math Magicians');
  expect(Element).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('App - Validate welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome to react/i);
  expect(welcomeElement).toBeInTheDocument();
});

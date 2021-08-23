import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const logo = screen.getByTestId("App-logo");
  expect(logo).toBeInTheDocument();
});

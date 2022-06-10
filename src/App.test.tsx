import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './app/store';

const MockApp = () =>(
  <Provider store={store}>
    <App/>
  </Provider>
)

test('renders Reservations title', () => {
  render(<MockApp />);
  const linkElement = screen.getByText(/Reservations/i);
  expect(linkElement).toBeInTheDocument();
});

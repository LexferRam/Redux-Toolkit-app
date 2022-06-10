import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux'
import { store } from '../app/store';

import CustomerCard from './CustomerCard'

const MockApp = () =>(
  <Provider store={store}>
    <CustomerCard id="123" name="Lexfer" food={['food1', 'food2']}/>
  </Provider>
)

it("It should render name lexfer passsed on prop name", () => {
    render(<MockApp />);
    expect(screen.getByText(/Lexfer/i)).toBeInTheDocument()
})
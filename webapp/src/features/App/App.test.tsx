import { render } from '@testing-library/react';
import Axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import reducer from '../../reducers';
import App from './App';

const phrase = {
  _id: 'sdfd5fa1dfad',
  email: 'test@test.com',
  howOften: '2',
  phrase: 'drone',
};

it('should match snapshot', () => {
  jest.spyOn(Axios, 'get').mockImplementation(() => {
   return new Promise((res, rej) => {
     res({data: [phrase]});
   });
  });

  const middlware = applyMiddleware(promise);

  const store = createStore(reducer, middlware);

  const {container} = render(<Provider store={store}>
    <App />
  </Provider>);

  expect(container.firstChild).toMatchSnapshot();
});

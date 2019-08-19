import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import reducer from '../../reducers';
import { IModal } from '../../reducers/modal';
import { Modal } from './Modal';

const modalOpen: IModal = {
  open: true,
  text: 'Modal Text',
};

const modalClosed: IModal = {
  open: false,
};

describe('<Error/>', () => {
  it('should match snapshot when the store state is open', () => {

    const middlware = applyMiddleware(promise);

    const store = createStore(reducer, {modal: modalOpen}, middlware);

    const { container } = render(<Provider store={store}>
      <Modal/>
    </Provider>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when the store state is closed', () => {

    const middlware = applyMiddleware(promise);

    const store = createStore(reducer, {modal: modalClosed}, middlware);

    const { container } = render(<Provider store={store}>
      <Modal/>
    </Provider>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

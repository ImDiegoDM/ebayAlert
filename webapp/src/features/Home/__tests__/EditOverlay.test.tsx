import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import { ISearchPhrase } from '../../../interfaces';
import reducer from '../../../reducers';
import { EditOverlay } from '../EditOverlay';

const phrase: ISearchPhrase = {
  _id: 'sdfd5fa1dfad',
  email: 'test@test.com',
  howOften: '2',
  phrase: 'drone',
};

describe('<EditOverlay/>', () => {
  it('should match snapshot when open', () => {

    const middlware = applyMiddleware(promise);

    const store = createStore(reducer, middlware);

    const { container } = render(
      <Provider store={store}>
        <EditOverlay phrase={phrase} open={true}/>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when closed', () => {

    const middlware = applyMiddleware(promise);

    const store = createStore(reducer, middlware);

    const { container } = render(
      <Provider store={store}>
        <EditOverlay phrase={phrase} open={false}/>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

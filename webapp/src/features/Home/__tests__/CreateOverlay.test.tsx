import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import reducer from '../../../reducers';
import { CreateOverlay } from '../CreateOverlay';

describe('<CreateOverlay/>', () => {
  it('should match snapshot when open', () => {

    const middlware = applyMiddleware(promise);

    const store = createStore(reducer, middlware);

    const { container } = render(
      <Provider store={store}>
        <CreateOverlay open={true}/>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when closed', () => {

    const middlware = applyMiddleware(promise);

    const store = createStore(reducer, middlware);

    const { container } = render(
      <Provider store={store}>
        <CreateOverlay open={false}/>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

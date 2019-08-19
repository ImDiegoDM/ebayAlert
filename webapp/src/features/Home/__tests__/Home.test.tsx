import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import { ISearchPhrase } from '../../../interfaces';
import reducer from '../../../reducers';
import { Home } from '../Home';

const phrase: ISearchPhrase = {
  _id: 'sdfd5fa1dfad',
  email: 'test@test.com',
  howOften: '2',
  phrase: 'drone',
};

const searchPhrases = {
  data: [phrase],
  fetched: true,
  fetching: false,
  ok: true,
};

const searchPhrasesFetching = {
  data: undefined,
  fetched: false,
  fetching: true,
  ok: false,
};

describe('<Home/>', () => {
  it('should match snapshot when store state is fetched', () => {
    const middlware = applyMiddleware(promise);

    const store = createStore(reducer, {searchPhrases}, middlware);

    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when store state is fetching', () => {
    const middlware = applyMiddleware(promise);

    const store = createStore(reducer, {
      searchPhrases: searchPhrasesFetching,
    }, middlware);

    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

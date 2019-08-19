import { render } from '@testing-library/react';
import React from 'react';
import { Error } from '../Error';
import { SearchBar } from '../SearchBar';

describe('<SearchBar/>', () => {
  it('should match snapshot', () => {
    const { container } = render(<SearchBar value="test" onChange={() => undefined}/>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

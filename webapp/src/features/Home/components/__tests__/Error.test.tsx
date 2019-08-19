import { render } from '@testing-library/react';
import React from 'react';
import { Error } from '../Error';

describe('<Error/>', () => {
  it('should match snapshot', () => {
    const { container } = render(<Error/>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

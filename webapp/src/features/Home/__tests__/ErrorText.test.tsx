import { render } from '@testing-library/react';
import React from 'react';
import { ErrorText } from '../ErrorText';

describe('<ErrorText/>', () => {
  it('should match snapshot', () => {
    const { container } = render(<ErrorText/>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

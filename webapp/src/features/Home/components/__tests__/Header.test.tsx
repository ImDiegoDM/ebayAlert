import { render } from '@testing-library/react';
import React from 'react';
import { Header } from '../Header';

describe('<Header/>', () => {
  it('should match snapshot', () => {
    const { container } = render(<Header/>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

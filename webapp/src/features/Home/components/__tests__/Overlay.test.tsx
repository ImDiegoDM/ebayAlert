import { render } from '@testing-library/react';
import React from 'react';
import { Overlay } from '../Overlay';

describe('<Overlay/>', () => {
  it('Overlay open should match snapshot', () => {
    const { container } = render(<Overlay open={true}>
      Overlay content
    </Overlay>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Overlay closed should match snapshot', () => {
    const { container } = render(<Overlay open={false}>
      Overlay content
    </Overlay>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

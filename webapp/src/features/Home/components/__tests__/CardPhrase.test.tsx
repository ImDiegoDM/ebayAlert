import { render } from '@testing-library/react';
import React from 'react';
import { ISearchPhrase } from '../../../../interfaces';
import { CardPhrase } from '../CardPhrase';

const phrase = {
  _id: 'sdfd5fa1dfad',
  email: 'test@test.com',
  howOften: '2',
  phrase: 'drone',
};

describe('<CardPrase/>', () => {
  it('should match snapshot', () => {
    const { container } = render(<CardPhrase phrase={phrase as ISearchPhrase}/>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

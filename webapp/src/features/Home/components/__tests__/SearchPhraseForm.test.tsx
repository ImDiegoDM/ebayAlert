import { render } from '@testing-library/react';
import React from 'react';
import { ISearchPhrase } from '../../../../interfaces';
import { SearchPhraseForm } from '../SearchPhraseForm';

const phrase: ISearchPhrase = {
  _id: 'sdfd5fa1dfad',
  email: 'test@test.com',
  howOften: '2',
  phrase: 'drone',
};

describe('<SearchBar/>', () => {
  it('should match snapshot', () => {
    const { container } = render(<SearchPhraseForm
      value={phrase}
      onValueChange={() => undefined}
      onSubmit={() => undefined}
    />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

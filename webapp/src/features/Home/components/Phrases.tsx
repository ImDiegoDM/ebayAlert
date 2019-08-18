import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchPhrases } from '../../../actions';
import { ISearchPhrase } from '../../../interfaces';
import { selectSearchPhrases } from '../../../selectors/serach_phrases';
import { CardPhrase } from './CardPhrase';
import { Error } from './Error';
import { Loading } from './Loading';

const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  padding: 10px 0 ;
`;

interface PhrasesProps {
  onDelete: (id?: string) => void;
  onSelect: (phrase: ISearchPhrase) => void;
}

export function Phrases(props: PhrasesProps) {
  const phrasesState = useSelector(selectSearchPhrases);
  const dispatch = useDispatch();

  if (phrasesState.fetching) {
    return <Loading/>;
  }

  if (!phrasesState.ok || phrasesState.data === undefined) {
    return <Error onTryAgain={() => dispatch(fetchPhrases())}/>;
  }

  return<Container>
    {phrasesState.data.map((phrase) => {
      return <CardPhrase
      onClick={() => props.onSelect(phrase)}
      phrase={phrase}
      onDelete={() => props.onDelete(phrase._id)}
      />;
    })}
  </Container>;
}

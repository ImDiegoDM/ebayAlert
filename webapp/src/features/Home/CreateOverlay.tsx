import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhrases } from '../../actions';
import { ISearchPhrase } from '../../interfaces';
import { Overlay } from './components/Overlay';
import { SearchPhraseForm } from './components/SearchPhraseForm';
import { ErrorText } from './ErrorText';

interface CreateOverlayProps {
  open: boolean;
  onClose?: () => void;
}

function CreateSearchPhrase(value: ISearchPhrase) {
  return axios.post(process.env.REACT_APP_SERVER_URL + '/search_phrases', value);
}

export function CreateOverlay(props: CreateOverlayProps) {
  const [value, setValue] = useState<ISearchPhrase>({
    email: '',
    howOften: '2',
    phrase: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    CreateSearchPhrase(value).then((res) => {
      if (props.onClose) {
        props.onClose();
        setError('');
      }

      dispatch(fetchPhrases());
    }).catch((err) => {
      setError(err.response.data);
    });
  }

  return <Overlay open={props.open} onExit={() => {
    if (props.onClose) {
      props.onClose();
    }
    setError('');
  }}>
    Add a Search Phrase
    {error && <ErrorText>{error}</ErrorText>}
    <SearchPhraseForm value={value} onValueChange={setValue} onSubmit={handleSubmit}/>
  </Overlay>;
}

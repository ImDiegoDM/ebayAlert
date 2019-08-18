import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhrases } from '../../actions';
import { ISearchPhrase } from '../../interfaces';
import { Overlay } from './components/Overlay';
import { SearchPhraseForm } from './components/SearchPhraseForm';
import { ErrorText } from './ErrorText';

interface EditOverlayProps {
  open: boolean;
  onClose?: () => void;
  phrase?: ISearchPhrase;
}

function EditSearchPhrase(value: ISearchPhrase) {
  return axios.put(process.env.REACT_APP_SERVER_URL + '/search_phrases/' + value._id, {
    email: value.email,
    howOften: value.howOften,
    phrase: value.phrase,
  });
}

export function EditOverlay(props: EditOverlayProps) {
  const [value, setValue] = useState<ISearchPhrase|undefined>(undefined);
  const [error, setError] = useState('');

  useEffect(() => {
    setValue(props.phrase);
  }, [props.phrase]);

  const dispatch = useDispatch();

  function handleSubmit() {
    if (value === undefined) {
      return;
    }
    EditSearchPhrase(value).then((res) => {
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
    Edit a Search Phrase
    {error && <ErrorText>{error}</ErrorText>}
    {value !== undefined && <SearchPhraseForm value={value} onValueChange={setValue} onSubmit={handleSubmit}/>}
  </Overlay>;
}

import axios from 'axios';

export function fetchPhrases() {
  return {
    payload: axios.get(process.env.REACT_APP_SERVER_URL + '/search_phrases'),
    type: 'FETCH_PHRASES',
  };
}

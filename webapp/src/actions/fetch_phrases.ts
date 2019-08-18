import axios from 'axios';

export function fetchPhrases(q?: string) {
  return {
    payload: axios.get(process.env.REACT_APP_SERVER_URL + '/search_phrases' + (q ? `?q=${q}` : '')),
    type: 'FETCH_PHRASES',
  };
}

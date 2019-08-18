import { State } from '../reducers';

export function selectSearchPhrases(store: State) {
  return store.searchPhrases;
}

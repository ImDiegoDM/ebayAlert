import { State } from '../reducers';

export function selectModal(store: State) {
  return store.modal;
}

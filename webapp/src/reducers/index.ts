import { combineReducers } from 'redux';
import { IApiRequest, ISearchPhrase } from '../interfaces';
import modal, { IModal } from './modal';
import searchPhrases from './search_phrases';

export interface State {
  modal: IModal;
  searchPhrases: IApiRequest<ISearchPhrase[]>;
}

export default combineReducers<State>({
  modal,
  searchPhrases,
});

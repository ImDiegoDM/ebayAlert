import { AxiosError, AxiosResponse } from 'axios';
import { Action } from 'redux';
import { IApiRequest, ISearchPhrase } from '../interfaces';

const defaultValue: IApiRequest<ISearchPhrase[]> = {
  data: undefined,
  fetched: false,
  fetching: false,
  ok: false,
};

interface IAction extends Action {
  payload: AxiosResponse<ISearchPhrase[]>|AxiosError;
}

export default (state = defaultValue, action: IAction) => {
  switch (action.type) {
    case 'FETCH_PHRASES_PENDING':
      return {...state, fetching: true};
    case 'FETCH_PHRASES_FULFILLED':
      return {
        ...state,
        data: (action.payload as AxiosResponse<ISearchPhrase[]>).data,
        fetched: true ,
        fetching: false,
        ok: true,
      };
    case 'FETCH_PHRASES_REJECTED':
      return {
        ...state,
        error: action.payload as AxiosError,
        fetched: true,
        fetching: false ,
        ok: false,
      };
    default:
      return state;
  }
};

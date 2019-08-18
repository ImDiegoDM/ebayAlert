import { AxiosError, AxiosResponse } from 'axios';
import { Action } from 'redux';
import { IApiRequest, ISearchPhrase } from '../interfaces';

export interface IModal {
  open: boolean;
  text?: string;
  onConfirm?: () => void;
}

const defaultValue: IModal = {
  open: false,
};

interface IAction extends Action {
  payload: {
    onConfirm?: () => void;
    text: string;
  };
}

export default (state = defaultValue, action: IAction) => {
  switch (action.type) {
    case 'MODAL_OPEN':
      return {...state, open: true, onConfirm: action.payload.onConfirm, text: action.payload.text};
    case 'MODAL_CLOSE':
      return { ...state, open: false, onConfirm: undefined };
    case 'MODAL_CONFIRM':
      if (state.onConfirm) {
        state.onConfirm();
      }

      return { ...state, open: false, onConfirm: undefined };
    default:
      return state;
  }
};

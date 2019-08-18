import { AxiosError } from 'axios';

export interface IApiRequest<T= any, E= any> {
  fetching: boolean;
  fetched: boolean;
  ok: boolean;
  data?: T;
  error?: AxiosError;
}

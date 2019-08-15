import * as validator from 'validator'

export interface SearchPhrase{
  phrase:string;
  howOften:2|10|30
}

export interface Alert{
  id?:string,
  email:string,
  phrases:SearchPhrase[]
}

export const collection = 'search_phrases';

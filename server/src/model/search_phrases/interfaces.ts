export interface ISearchPhrase {
  _id?: string;
  email: string;
  phrase: string;
  howOften: '2' | '10' | '30';
  lastTimeSent?: string;
}

export const collection = 'search_phrases';

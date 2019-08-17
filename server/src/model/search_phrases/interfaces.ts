export interface ISearchPhrase {
  email: string;
  phrase: string;
  howOften: 2 | 10 | 30;
}

export const collection = 'search_phrases';

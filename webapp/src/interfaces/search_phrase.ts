export interface ISearchPhrase {
  _id?: string;
  phrase: string;
  email: string;
  howOften: '2' | '10' | '30';
}

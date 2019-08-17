import { mongo } from '../../database';
import { collection, ISearchPhrase } from './interfaces';

interface ISearchPhraseUpdate {
  email?: string;
  phrase?: string;
  howOften?: 2 | 10 | 30;
}

export async function update(filter: any, value: ISearchPhraseUpdate) {
  return mongo.collection(collection).update(filter, {$set: value});
}

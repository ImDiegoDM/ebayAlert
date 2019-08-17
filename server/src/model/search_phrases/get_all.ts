import { mongo } from '../../database';
import { collection, ISearchPhrase } from './interfaces';

export async function getAll(query: any= {}) {
  return mongo.collection(collection).getAll<ISearchPhrase>(query);
}

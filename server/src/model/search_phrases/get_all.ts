import { mongo } from '../../database';
import { collection, ISearchPhrase } from './interfaces';

export async function getAll(query: any= {}): Promise<ISearchPhrase[]> {
  return mongo.collection(collection).getAll<ISearchPhrase>(query);
}

import { mongo } from '../../database';
import { collection, ISearchPhrase } from './interfaces';

export async function getOne(query: any= {}): Promise<ISearchPhrase> {
  return mongo.collection(collection).getOne<ISearchPhrase>(query);
}

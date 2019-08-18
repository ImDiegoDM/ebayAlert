import { FindOneOptions } from 'mongodb';
import { mongo } from '../../database';
import { collection, ISearchPhrase } from './interfaces';

export async function getAll(query: any= {}, options?: FindOneOptions) {
  return mongo.collection(collection).getAll<ISearchPhrase>(query, options);
}

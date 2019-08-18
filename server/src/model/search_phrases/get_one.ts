import { FindOneOptions } from 'mongodb';
import { mongo } from '../../database';
import { collection, ISearchPhrase } from './interfaces';

export async function getOne(query: any= {}, options?: FindOneOptions) {
  return mongo.collection(collection).getOne<ISearchPhrase>(query, options);
}

import { mongo } from '../../database';
import { collection, ISearchPhrase } from './interfaces';

export async function insertOne(obj: ISearchPhrase): Promise<ISearchPhrase> {
  return mongo.collection(collection).insertOne(obj);
}

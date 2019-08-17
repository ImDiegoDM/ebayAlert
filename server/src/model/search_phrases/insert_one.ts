import { InsertOneWriteOpResult } from 'mongodb';
import { mongo } from '../../database';
import { collection, ISearchPhrase } from './interfaces';

export async function insertOne(obj: ISearchPhrase): Promise<InsertOneWriteOpResult> {
  return mongo.collection(collection).insertOne(obj);
}

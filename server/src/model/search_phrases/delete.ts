import { ObjectId } from 'mongodb';
import { mongo } from '../../database';
import { collection } from './interfaces';

export async function remove(id: ObjectId) {
  return mongo.collection(collection).remove({_id: id});
}

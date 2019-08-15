import { SearchPhrase, collection, Alert } from "./interfaces";
import { mongo } from '../../database';

export async function insertOne(obj:Alert):Promise<Alert>{
  return mongo.collection(collection).insertOne(obj);
}
import { SearchPhrase, collection, Alert } from "./interfaces";
import { mongo } from '../../database';

export async function getAll(query:any={}):Promise<Alert[]>{
  return mongo.collection(collection).getAll<Alert>(query)
}
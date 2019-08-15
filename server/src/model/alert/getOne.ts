import { SearchPhrase, collection, Alert } from "./interfaces";
import { mongo } from '../../database';

export async function getOne(query:any={}):Promise<Alert>{
  return mongo.collection(collection).getOne<Alert>(query)
}
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { getOne } from '../../model/search_phrases';

export default async function(req: Request, res: Response) {
  const phrase = await getOne({_id: new ObjectId(req.params.id)}, {projection: {lastTimeSent: 0}});

  res.send(phrase);
}

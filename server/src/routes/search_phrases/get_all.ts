import { Request, Response } from 'express';
import { getAll } from '../../model/search_phrases';

export default async function(req: Request, res: Response) {
  console.log(req.query);

  const filter = req.query.q ? {
    $or: [
      {phrase: new RegExp(req.query.q, 'g')},
      {email: new RegExp(req.query.q, 'g')},
    ],
  } : {};

  const phrases = await getAll(filter, {projection: {lastTimeSent: 0}});

  res.send(phrases);
}

import { Request, Response } from 'express';
import { getOne } from '../../model/search_phrases';

export default async function(req: Request, res: Response) {
  const phrases = await getOne({_id: req.params.id});

  res.send(phrases);
}

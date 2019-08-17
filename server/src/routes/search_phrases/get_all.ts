import { Request, Response } from 'express';
import { getAll } from '../../model/search_phrases';

export default async function(req: Request, res: Response) {
  const phrases = await getAll();

  res.send(phrases);
}

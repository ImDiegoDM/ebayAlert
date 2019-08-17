import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { remove } from '../../model/search_phrases';

export default async function(req: Request, res: Response) {

  try {
    await remove(new ObjectId(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');

    return;
  }

  res.status(204).send();
}

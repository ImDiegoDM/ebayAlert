import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { getProducts } from '../../ebay_api';
import { getOne } from '../../model/search_phrases';

export default async function(req: Request, res: Response) {
  try {
    const phrase = await getOne({_id: new ObjectId(req.params.id)}, {projection: {lastTimeSent: 0}});

    res.send(await getProducts(phrase.phrase));
  } catch (error) {
    res.status(500).send(error);
  }
}

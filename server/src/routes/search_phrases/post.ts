import { Request, Response } from 'express';
import { getOne, insertOne } from '../../model/search_phrases';
import { isValid } from './isValid';

export default async function(req: Request, res: Response) {

  const [errors, cleanedBody] = isValid(req.body);

  if (Object.keys(errors).length > 0) {
    res.status(422).send({errors});

    return;
  }

  try {
    const result = await getOne({email: cleanedBody.email, phrase: cleanedBody.phrase});
    if (result) {
      res.status(400).send('This phrase for this email alredy exists');
      return;
    }

    await insertOne(cleanedBody);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
    return;
  }

  res.status(201).send(cleanedBody);
}

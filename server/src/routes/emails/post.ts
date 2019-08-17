import { Request, Response } from 'express';
import { isEmail } from 'validator';
import { getOne, insertOne } from '../../model/alert';

function isValid(obj: any) {
  const errors: any = {};
  const cleanedObj: any = {};

  if (!obj.email) {
    errors.email = 'The email is missing';
  } else if (!isEmail(obj.email)) {
    errors.email = 'The email must be a valid email';
  } else {
    cleanedObj.email = obj.email;
  }

  return [errors, cleanedObj];
}

export default async function(req: Request, res: Response) {

  const [errors, cleanedBody] = isValid(req.body);

  if (Object.keys(errors).length > 0) {
    res.status(422).send({errors});

    return;
  }

  try {
    const result = await getOne({email: cleanedBody.email});
    if (result) {
      res.status(400).send('this email alredy exists');
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

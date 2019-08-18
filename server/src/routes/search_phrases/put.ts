import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { isEmail } from 'validator';
import { getOne, update } from '../../model/search_phrases';

function CleanObj(obj: any) {
  const cleanedObj: any = {};

  if (obj.email) {
    cleanedObj.email = obj.email;
  }

  if (obj.phrase) {
    cleanedObj.phrase = obj.phrase;
  }

  if (obj.howOften) {
    cleanedObj.howOften = obj.howOften;
  }

  return cleanedObj;
}

export default async function(req: Request, res: Response) {
  const cleanedObj = CleanObj(req.body);

  if (cleanedObj.email) {
    if (!isEmail(cleanedObj.email)) {
      res.status(422).send({
        erros: {
          email: 'The email must be a valid email',
        },
      });
      return;
    }
  }

  if (cleanedObj.howOften) {
    if (typeof cleanedObj.howOften === 'number') { cleanedObj.howOften = cleanedObj.howOften.toString(); }

    if (cleanedObj.howOften !== '2' && cleanedObj.howOften !== '10' && cleanedObj.howOften !== '30') {
      res.status(422).send({
        erros: {
          howOften: 'The howOften must be 2, 10 or 30',
        },
      });
      return;
    }
  }

  try {
    const getOneResult = await getOne({email: cleanedObj.email, phrase: cleanedObj.phrase});
    if (getOneResult) {
      res.status(400).send('This phrase for this email alredy exists');
      return;
    }

    await update({_id: new ObjectId(req.params.id)}, cleanedObj);
    const result = await getOne({_id: new ObjectId(req.params.id)});
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error');
  }

}

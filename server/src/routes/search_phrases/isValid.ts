import { isEmail } from 'validator';
import { ISearchPhrase } from '../../model/search_phrases';

export function isValid(obj: any): [any, ISearchPhrase] {
  const errors: any = {};

  const cleanedObj: any = {};

  if (!obj.email) {
    errors.email = 'The email param is missing';
  } else if (!isEmail(obj.email)) {
    errors.email = 'The email must be a valid email';
  } else {
    cleanedObj.email = obj.email;
  }
  if (!obj.phrase) {
    errors.phrase = 'The phrase param is missing';
  } else {
    cleanedObj.phrase = obj.phrase;
  }
  if (!obj.howOften) {
    errors.howOften = 'The howOften param is missing';
  } else {
    const howOften = parseInt(obj.howOften, 10);
    if (howOften !== 2 && howOften !== 10 && howOften !== 30) {
      errors.howOften = 'The howOften param must be one this values 2, 10, 30';
    } else {
      cleanedObj.howOften = howOften;
    }
  }
  return [errors, cleanedObj];
}

import { isValid } from '../isValid';

describe('Test for search_phrases/isValid.ts', () => {
  it('should valid correctly a search phrase object', () => {
    const obj = {
      email: 'test@test.com',
      howOften: '2',
      phrase: 'drone',
    };

    const [errors] = isValid(obj);

    expect(Object.keys(errors).length).toEqual(0);
  });

  it('should return a error if the email is invalid', () => {
    const obj = {
      email: 'test',
      howOften: '2',
      phrase: 'drone',
    };

    const [errors] = isValid(obj);

    expect(errors.email).toEqual('The email must be a valid email');
  });

  it('should return a error if the email is missing', () => {
    const obj = {
      howOften: '2',
      phrase: 'drone',
    };

    const [errors] = isValid(obj);

    expect(errors.email).toEqual('The email param is missing');
  });

  it('should return a error if the howOften is missing', () => {
    const obj = {
      email: 'test@test.com',
      phrase: 'drone',
    };

    const [errors] = isValid(obj);

    expect(errors.howOften).toEqual('The howOften param is missing');
  });

  it('should return a error if the phrase is missing', () => {
    const obj = {
      email: 'test@test.com',
      howOften: '2',
    };

    const [errors] = isValid(obj);

    expect(errors.phrase).toEqual('The phrase param is missing');
  });

  it('should remove unnecessary param', () => {
    const obj = {
      email: 'test',
      howOften: '2',
      param: 'test',
      phrase: 'drone',
      second_param: 'test',
    };

    const [errors, cleanedObj] = isValid(obj);

    expect(cleanedObj).not.toHaveProperty('param');
    expect(cleanedObj).not.toHaveProperty('second_param');
  });
});

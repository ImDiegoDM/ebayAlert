import moment from 'moment';
import { mongo } from '../../../database';
import { insertOne } from '../insert_one';
import { ISearchPhrase } from '../interfaces';

const collectionName = 'search_phrases';

describe('Test for search_phrases/insert_one.ts', () => {

  beforeAll(async () => {
    await mongo.collection(collectionName).remove();
  });

  afterAll(async () => {
    await mongo.collection(collectionName).remove();
    await mongo.close();
  });

  it('should insert correctly the search phrase', async () => {
    const obj: ISearchPhrase = {
      email: 'test@test.com',
      howOften: '2',
      lastTimeSent: moment().format('YYYY-MM-DD HH:mm'),
      phrase: 'drone',
    };

    const result = await insertOne(obj);

    const findedObj = await mongo.collection(collectionName).getOne({_id: result.insertedId});

    expect(obj.email).toEqual(findedObj.email);
    expect(obj.howOften).toEqual(findedObj.howOften);
    expect(obj.phrase).toEqual(findedObj.phrase);
  });
});

import moment from 'moment';
import { mongo } from '../../../database';
import { insertOne } from '../insert_one';
import { ISearchPhrase } from '../interfaces';
import { update } from '../update';

const collectionName = 'search_phrases';

describe('Test for search_phrases/update.ts', () => {

  beforeAll(async () => {
    await mongo.collection(collectionName).remove();
  });

  afterAll(async () => {
    await mongo.collection(collectionName).remove();
    await mongo.close();
  });

  it('should update correctly the search phrase', async () => {
    const obj: ISearchPhrase = {
      email: 'test@test.com',
      howOften: '2',
      lastTimeSent: moment().format('YYYY-MM-DD HH:mm'),
      phrase: 'drone',
    };

    const result = await insertOne(obj);

    await update({_id: result.insertedId}, {email: 'test2@test.com'});

    const findedObj = await mongo.collection(collectionName).getOne({_id: result.insertedId});

    expect(findedObj.email).toEqual('test2@test.com');
  });
});

import moment from 'moment';
import { mongo } from '../../../database';
import { remove } from '../delete';
import { insertOne } from '../insert_one';
import { ISearchPhrase } from '../interfaces';

const collectionName = 'search_phrases';

describe('Test for search_phrases/delete.ts', () => {

  beforeAll(async () => {
    await mongo.collection(collectionName).remove();
  });

  afterAll(async () => {
    await mongo.collection(collectionName).remove();
    await mongo.close();
  });

  it('should delete item correctly', async () => {
    const obj: ISearchPhrase = {
      email: 'test@test.com',
      howOften: '2',
      lastTimeSent: moment().format('YYYY-MM-DD HH:mm'),
      phrase: 'drone',
    };

    const result = await insertOne(obj);

    await remove(result.insertedId);

    const findedObj = await mongo.collection(collectionName).getOne({_id: result.insertedId});

    expect(findedObj).toEqual(null);
  });
});

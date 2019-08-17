import { mongo } from '../../../database';
import { getOne } from '../get_one';

const collectionName = 'search_phrases';

const objsToInsert = [
  {
    email: 'test@test.com',
    howOften: 10,
    phrase: 'drone',
  },
  {
    email: 'test2@test.com',
    howOften: 2,
    phrase: 'robot',
  },
  {
    email: 'test3@test.com',
    howOften: 10,
    phrase: 'brush',
  },
  {
    email: 'test4@test.com',
    howOften: 30,
    phrase: 'toy',
  },
];

describe('Test for search_phrases/get_one.ts', () => {
  beforeAll(async () => {
    await mongo.collection(collectionName).remove();
    await mongo.collection(collectionName).insertMany(objsToInsert);
  });

  afterAll(async () => {
    await mongo.collection(collectionName).remove();
    await mongo.close();
  });

  it('should return correctly all the search_phrases', async () => {
    const result = await getOne({email: 'test2@test.com'});

    expect(result).toEqual(objsToInsert[1]);
  });
});

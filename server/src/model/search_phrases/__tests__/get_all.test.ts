import { mongo } from '../../../database';
import { getAll } from '../get_all';

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

describe('Test for search_phrases/get_all.ts', () => {
  beforeAll(async () => {
    await mongo.collection(collectionName).remove();
    await mongo.collection(collectionName).insertMany(objsToInsert);
  });

  afterAll(async () => {
    await mongo.collection(collectionName).remove();
    await mongo.close();
  });

  it('should return correctly all the search_phrases', async () => {
    const result = await getAll();

    expect(result.length).toEqual(4);
  });
});

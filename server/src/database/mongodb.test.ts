import { mongo } from './mongodb';

const collectionName = 'search_phrases';

describe('testing mongodb file', () => {
  afterAll(async () => {
    await mongo.collection(collectionName).remove();
    await mongo.close(true);
  });

  beforeEach(async () => {
    await mongo.collection(collectionName).remove();
  });

  it('should instert and return a object correctly', async () => {
    const obj = {
      lastName: 'Foo',
      name: 'John',
    };

    const res = await mongo.collection(collectionName).insertOne(obj);

    expect(res).toHaveProperty('insertedId');

    const returnedObj = await mongo.collection(collectionName).getOne({_id: res.insertedId});

    expect(returnedObj).toEqual(obj);

  });

  it('should inster a array of files and return correctly', async () => {
    const objs = [
      {
        lastName: 'doo',
        name: 'john',
      },
      {
        lastName: 'doo',
        name: 'johny',
      },
      {
        lastName: 'doo',
        name: 'Albert',
      },
    ];

    const res = await mongo.collection(collectionName).insertMany(objs);

    expect(res.insertedCount).toEqual(3);

    const find = await mongo.collection(collectionName).getAll({lastName: 'doo'});

    expect(find.length).toEqual(3);
  });
});

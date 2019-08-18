import { mongo } from './mongodb';

const collectionName = 'search_phrases';

describe('testing mongodb file', () => {
  afterAll(async () => {
    await mongo.collection(collectionName).remove();
    await mongo.close();
  });

  beforeEach(async () => {
    await mongo.collection(collectionName).remove();
  });

  it('should insert and return a object correctly', async () => {
    const obj = {
      lastName: 'Foo',
      name: 'John',
    };

    const res = await mongo.collection(collectionName).insertOne(obj);

    const returnedObj = await mongo.collection(collectionName).getOne({_id: res.insertedId});

    expect(returnedObj).toEqual(obj);

  });

  it('should insert a array of files and return correctly', async () => {
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

  it('should update correctly', async () => {
    const obj = {
      lastName: 'Foo',
      name: 'John',
    };

    const res = await mongo.collection(collectionName).insertOne(obj);

    await mongo.collection(collectionName).update(
      {_id: res.insertedId},
      {$set: {name: 'Luciano'}},
    );

    const returnedObj = await mongo.collection(collectionName).getOne({_id: res.insertedId});

    expect(returnedObj.name).toEqual('Luciano');
  });
});

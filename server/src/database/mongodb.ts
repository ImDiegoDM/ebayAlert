import * as mongodb from 'mongodb';

const url = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;
let client: mongodb.MongoClient;

function conect(): Promise<void> {
  return new Promise((res, rej) => {
    mongodb.MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, c) => {
      if (err) {
        rej();
        return;
      }

      client = c;
      res();
    });
  });
}

async function getDb() {
  if (!client) { await conect(); }

  return client.db(dbName);
}

function getAll<T= any>(collection: string, query: any= {}): Promise<T[]> {
  return new Promise(async (res, rej) => {
    try {
      const db = await getDb();

      db.collection(collection).find(query).toArray((err, result) => {
        if (err) {
          rej(err);
        }
        res(result);
      });
    } catch (error) {
      rej(error);
    }
  });
}

function getOne<T= any>(collection: string, query: any= {}): Promise<T> {
  return new Promise(async (res, rej) => {
    try {
      const db = await getDb();

      db.collection(collection).findOne(query, (err, result) => {
        if (err) {
          rej(err);
          return;
        }

        res(result);
      });
    } catch (error) {
      rej(error);
    }
  });
}

function instertOne<T= any>(collection: string, obj: T): Promise<mongodb.InsertOneWriteOpResult> {
  return new Promise(async (res, rej) => {
    try {
      const db = await getDb();

      db.collection(collection).insertOne(obj, async (err, result) => {
        if (err) {
          rej(err);
          return;
        }

        res(result);
      });
    } catch (error) {
      rej(error);
    }
  });
}

function insertMany<T= any>(collection: string, objs: T[]): Promise<mongodb.InsertWriteOpResult> {
  return new Promise(async (res, rej) => {
    try {
      const db = await getDb();

      db.collection(collection).insertMany(objs, async (err, result) => {
        if (err) {
          rej(err);
          return;
        }

        res(result);
      });
    } catch (error) {
      rej(error);
    }
  });
}

function remove(collection: string, query = {}): Promise<mongodb.DeleteWriteOpResultObject> {
  return new Promise(async (res, rej) => {
    try {
      const db = await getDb();

      db.collection(collection).deleteMany(query, async (err, result) => {
        if (err) {
          rej(err);
          return;
        }

        res(result);
      });
    } catch (error) {
      rej(error);
    }
  });
}

function update(collection: string, filter: any, value: any): Promise<mongodb.UpdateWriteOpResult> {
  return new Promise(async (res, rej) => {
    try {
      const db = await getDb();

      db.collection(collection).updateOne(filter, value, (err, result) => {
        if (err) {
          rej(err);
          return;
        }

        res(result);
      });
    } catch (err) {
      rej(err);
    }
  });
}

async function close(force?: boolean) {
  await client.close(force);
  client = undefined;
}

export const mongo = {
  close,
  collection(collection: string) {
    return{
      getOne<T= any>(query: any= {}) {
        return getOne<T>(collection, query);
      },
      getAll<T= any>(query: any= {}) {
        return getAll<T>(collection, query);
      },
      insertOne<T>(obj: T) {
        return instertOne<T>(collection, obj);
      },
      insertMany<T>(objs: T[]) {
        return insertMany<T>(collection, objs);
      },
      remove(query?: any) {
        return remove(collection, query);
      },
      update(filter: any, value: any) {
        return update(collection, filter, value);
      },
    };
  },
};

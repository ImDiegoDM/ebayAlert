import * as mongodb from 'mongodb';

const url = process.env.MONGO_URL;
const dbName = 'ebay_alert_db';
// tslint:disable-next-line: variable-name
let _db: mongodb.Db;

function conect(): Promise<void> {
  return new Promise((res, rej) => {
    mongodb.MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
      if (err) {
        rej();
        return;
      }

      _db = client.db(dbName);
      res();
    });
  });
}

async function getDb() {
  if (!_db) { await conect(); }

  return _db;
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
        if (err) { rej(err); }

        res(result);
      });
    } catch (error) {
      rej(error);
    }
  });
}

function instertOne<T= any>(collection: string, obj: T): Promise<any> {
  return new Promise(async (res, rej) => {
    try {
      const db = await getDb();

      db.collection(collection).insertOne(obj, async (err, result) => {
        if (err) {
          rej(err);
          return;
        }

        res();
      });
    } catch (error) {
      rej(error);
    }
  });
}

export const mongo = {
  getDb,
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
    };
  },
};

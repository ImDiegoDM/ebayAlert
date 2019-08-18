const MongoClient = require('mongodb').MongoClient;
const collection = 'search_phrases';

// setup env variables for test
process.env = Object.assign(process.env, { 
  DB_NAME:'ebay_alert_db_test',
  MONGO_URL:'mongodb://localhost:27017/',
});

// create the collection for use in tests
MongoClient.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}, function(err, client) {
  if (err) throw err;
  var dbo = client.db(process.env.DB_NAME);
  dbo.createCollection(collection, function(err, res) {
    if (err) throw err;

    client.close();
  });
});
const MongoClient = require('mongodb').MongoClient;


module.exports.createDriver = ({options}) => {
  return {
    connect(url) {
      return MongoClient.connect(url, options)
        .then(client => {
          return {
            client,
            db: client.db(),
            close() { client.close(); }
          };
        });
    }
  };
};

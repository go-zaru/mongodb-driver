const MongoClient = require('mongodb').MongoClient;

module.exports.createDriver = ({options}) => {
  return {
    connect({url,connectOptions}) {
      const clientOptions = Object.assign({}, options, connectOptions);
      return MongoClient.connect(url, clientOptions)
        .then(client => {
          return {
            client,
            db: client.db(),
            close() { client.close(); return client; }
          };
        });
    }
  };
};

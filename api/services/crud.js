const { ObjectID } = require('mongodb').ObjectID;
const client = require('../db/mongoClient');
const config = require('../config/config');

class CrudService {
  constructor(collection) {
    this.client = client;
    this.collection = collection;
  }

  static idQuery(id) {
    return { _id: new ObjectID(id) };
  }

  run(operation) {
    const promise = new Promise((resolve, reject) => {
      this.client.connect((connectionError, server) => {
        if (connectionError) {
          reject(connectionError);
        }
        operation(server.db(config.mongo_db).collection(this.collection), (operationError, result) => {
          if (operationError) {
            reject(operationError);
          } else {
            resolve(result);
          }
          this.client.close();
        });
      });
    });
    return promise;
  }

  create(model) {
    return this.run((collection, callback) => collection.insert(model, callback));
  }

  get(query) {
    return this.run((collection, callback) => collection.find(query).toArray(callback));
  }

  getById(id) {
    const query = CrudService.idQuery(id);
    return this.run((collection, callback) => collection.findOne(query, callback));
  }

  update(id, model) {
    const query = CrudService.idQuery(id);
    return this.run((collection, callback) => collection.update(query, model, callback));
  }

  delete(id) {
    const query = CrudService.idQuery(id);
    return this.run((collection, callback) => collection.remove(query, callback));
  }
}

module.exports = CrudService;

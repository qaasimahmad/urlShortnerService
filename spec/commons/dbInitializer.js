const assert = require('assert');

const { elasticsearch: { host: elasticURL } } = require('../../app/config/config');
const client                                  = require('../../app/Libraries/common/elasticsearch/createClient')(elasticURL); // eslint-disable-line max-len
const logger                                  = require('../../app/Libraries/logger');

function deleteIndex(indexName, onDeleted){
  assert(indexName, 'Name of the index must be specified for this operation');

  client.indices.delete({
    index: indexName,
  }, (err, result) => {
    if(err) return onDeleted(err);
    return onDeleted(result);
  });
}


function createIndex(indexName, onCreated){
  client.indices.create({
    index: indexName,
  }, (err, result) => {
    if(err) return onCreated(err);
    return onCreated(result);
  });
  onCreated();
}

function indexExists(indexName){
  assert(indexName, 'Name of the index must be specified for this operation');
  client.indices.exists({ index: indexName }, (err, resp) => {
    if(err){
      return logger.error('Index Check Error! ');
    }

    if(!resp){
      logger.info(`${indexName} does not exist`);
      createIndex(indexName, (err) => {
        if(err) return logger.info('Failed to Create Index');
        return logger.info('Index Creation Successful!');
      });
    } else {
      return logger.info(`${indexName} already exists`);
    }
  });
}

module.exports = { indexExists, deleteIndex };

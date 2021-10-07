const assert = require('assert');

const { elasticUrl } = require('../../../config/config');
const client         = require('./createClient')(elasticUrl); // eslint-disable-line max-len
const logger         = require('../../logger');

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
}

function indexExists(indexName, onDone){
  assert(indexName, 'Name of the index must be specified for this operation');
  client.indices.exists({ index: indexName }, (err, resp) => {
    if(err){
      return onDone(logger.error('Index Check Error! ', err));
    }

    if(!resp){
      logger.info(`${indexName} does not exist`);
      createIndex(indexName, (err) => {
        if(err) return onDone(logger.info('Failed to Create Index'));
        return logger.info('Index Creation Successful!');
      });
    } else {
      return logger.info(`${indexName} already exists`);
    }
  });
}

module.exports = { indexExists, deleteIndex, createIndex };

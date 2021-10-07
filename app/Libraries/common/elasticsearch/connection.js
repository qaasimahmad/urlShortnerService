const assert        = require('assert');
const elasticSearch = require('elasticsearch');
const logger        = require('../../logger');
const {elasticUrl}  = require('../../../config/config')

const client = new elasticSearch.Client({
  host: elasticUrl,
});

client.ping({
  requestTimeout: 30000,
}, function(error){
  if(error){
    logger.error('elasticsearch cluster is down!');
  } else {
    logger.info('elasticsearh is up and running ::)');
  }
});

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

module.exports = { indexExists, deleteIndex, createIndex, client };

// module.exports = createClient;

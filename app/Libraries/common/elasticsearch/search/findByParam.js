const {
  indexName:index,
  documentType:type} = require('../../../../config/config');

const {client} = require('../connection');

const formatResult = require('../formatResults');

function findByParam(searchParam, onFound){
  client.search({
    index,
    type,
    body: {
      query: {
        bool: {
          must: {
            term: searchParam,
          },
        },
      },
    },
  }, (err, result) => {
    if(err) return onFound(err);
    formatResult(result, (err, formattedResult) => {
      if(err) return onFound(err);
      return onFound(null, formattedResult);
    });
  });
}

module.exports = findByParam;

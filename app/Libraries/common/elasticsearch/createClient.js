const assert        = require('assert');
const elasticSearch = require('elasticsearch');

function createClient(elasticURL){
  assert(elasticURL, 'elasticsearchUrl must be passed');

  return new elasticSearch.Client({
    host: elasticURL,
  });
}

module.exports = createClient;

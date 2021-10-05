const assert = require( 'assert' );

const {elasticsearch: {host: elasticURL}} = require('../../app/config/config');
const client                              = require('../../app/Libraries/common/elasticsearch/createClient')(elasticURL); //eslint disable-line max-len

function deleteIndex(indexName, onDeleted){
  assert(indexName, 'Name of the index must be specified for this operation');

  client.indices.delete({
    index: indexName
  }, (err, result)=>{
    if(err) return onDeleted(err);
    return onDeleted(result);
  });
    
}

module.exports = deleteIndex;
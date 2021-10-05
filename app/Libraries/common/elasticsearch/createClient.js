const assert        = require( 'assert' );
const elasticSearch = require( 'elasticsearch' );

function createClient( elasticURL ){

  assert( elasticURL, 'elasticsearchUrl must be passed' );

  return new elasticSearch.Client( {
    node: elasticURL
  } );

}

module.exports = createClient;
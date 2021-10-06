const {elasticsearch:{
    host:elasticUrl, 
    indexName:index, 
    documentType:type}} = require('../../../../config/config');
  const createClient    = require('../createClient');
  const client          = createClient(elasticUrl);

  const formatResult = require('../formatResults');

function findByParam(searchParam, onFound){
    console.log('Searchparam', searchParam);
  client.search({
    index,
    type,
    body: {
      query: {
        bool: {
          must: {
            term: searchParam
          }
        }
      }
    }
  }, (err, result)=>{
      console.log('Err', err);
      console.log('RES', result);
    if(err) return onFound(err);
    formatResult(result, (err, formattedResult)=>{
      if(err) return onFound(err);
      return onFound(null, formattedResult);
    })
  })
        
}

module.exports = findByParam;
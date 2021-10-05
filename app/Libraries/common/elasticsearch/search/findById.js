const {elasticsearch:{
  host:elasticUrl, 
  indexName:index, 
  documentType:type}} = require('../../../../config/config');
const createClient    = require('../createClient');
const client          = createClient(elasticUrl);


const formatResult = require('../formatResults');

function findById(searchParam, onFound){
  client.search({
    index,
    type,
    body: {
      query: {
        bool: {
          must: {
            match: { urlId: searchParam }
          }
        }
      }
    }
  }, (err, result)=>{
    if(err) return onFound(err);
    formatResult(result, (err, formattedResult)=>{
      if(err) return onFound(err);
      return onFound(null, formattedResult);
    })
  })
        
}

module.exports = findById;
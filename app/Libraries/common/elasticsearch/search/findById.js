const createClient = require('../createClient');

function createFindById(url, index, type){
    
  const client = createClient(url);

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
        return onFound(formattedResult);
      })
    })
        
  }
  return findById;
}

module.exports = createFindById;
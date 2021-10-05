const createClient = require('../createClient');

function createIndexData(host, userName, password){

  const client = createClient(host, userName, password);

  function indexData(items, onIndexed){
    const { _index: index, _type: type, body, _id: id} = items;
        
    client.index({
      index,
      type,
      id,
      body, 
    }, (err, result)=>{
      if(err) return onIndexed(err);
      return onIndexed(result);
    })
  }

  return indexData;
}

module.exports = createIndexData;
const createClient   = require('../createClient');
const { elasticUrl } = require('../../../../config/config');

const client = createClient(elasticUrl);

function indexData(items, onIndexed){
  const {
    _index: index, _type: type, body, _id: id,
  } = items;

  client.index({
    index,
    type,
    id,
    refresh: true,
    body,
  }, (err, result) => {
    if(err) return onIndexed(err);
    return onIndexed(null, result);
  });
}

module.exports = indexData;

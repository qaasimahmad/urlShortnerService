const findByParam = require('../../Libraries/common/elasticsearch/search/findByParam');

function expandShortUrlAndRedirect(urlId, onExpanded){
  const searchParam = { 'urlId.keyword': urlId };

  findByParam(searchParam, (err, result) => {
    if(err === null){
      return result.length > 0 ? onExpanded(null, result[0].longUrl)
        : onExpanded(null, result);
    }
    return onExpanded(err);
  });
}

module.exports = expandShortUrlAndRedirect;

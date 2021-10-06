function formatResults(elasticSearchResults, onFormatted){
  const result = elasticSearchResults.hits.hits.length > 0
    ? elasticSearchResults.hits.hits.map(((items) => items._source))
    : [];

  return onFormatted(null, result);
}

module.exports = formatResults;

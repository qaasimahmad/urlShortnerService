function createRequestStream(url){
  const { FetchStream } = require('fetch');

  return new FetchStream(url);
}
module.exports = createRequestStream;

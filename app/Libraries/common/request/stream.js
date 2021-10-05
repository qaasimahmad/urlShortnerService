function createRequestStream(url){
  const FetchStream = require("fetch").FetchStream;

  return new FetchStream(url);

}
module.exports = createRequestStream;
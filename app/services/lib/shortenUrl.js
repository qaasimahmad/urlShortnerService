const shortid    = require('shortid');
const isValidUrl = require('valid-url');

const isExistsLongUrl = require('./isExistsLongUrl');
const { baseUrl }     = require('../../config/config');
const logger          = require('../../Libraries/logger');

function shortenUrl(longUrl, onShortened){
  if(isValidUrl.isUri(longUrl)){
    isExistsLongUrl(longUrl, (err, result) => {
      if(err !== null) return onShortened(err);
      else if(result.length === 0) logger.info('longUrl not found..');
      const urlId    = shortid.generate();
      const shortUrl = `${baseUrl}/${urlId}`;

      return onShortened(null, shortUrl);
    });
  }
  else {
    return onShortened({ status: 400, result: `url ${longUrl} is invalid!` });
  }
  
}
module.exports = shortenUrl;

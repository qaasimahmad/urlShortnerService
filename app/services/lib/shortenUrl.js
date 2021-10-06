const shortid = require('shortid');
const isValidUrl = require('../../Libraries/common/util/util');
const isExistsLongUrl = require('./isExistsLongUrl');
const {baseUrl} = require('../../config/config');

function shortenUrl(longUrl, onShortened){
 
 if(!isValidUrl(longUrl)) return {status: 400, result: 'Invalid url found'};
 
 isExistsLongUrl(longUrl, (err, result)=>{
     if(err) return onShortened(err);
     const urlId = shortid.generate();
     const shortUrl = baseUrl + '/' + urlId;
     return onShortened(null, shortUrl);
 })
    
}
module.exports = shortenUrl;
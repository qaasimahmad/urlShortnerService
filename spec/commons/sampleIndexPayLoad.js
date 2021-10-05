const moment             = require('moment');
const sampleIndexPayload = {
  _index: 'sandbox',
  _type:  'urlData',
  id:     'GVED1',
  body:   {
    longUrl:   'https://www.facebook.com',
    shortUrl:  'bitlyshorturl/GVED1',
    urlId:     'GVED1',
    metaData:  {},
    createdAt: moment(),
    updatedAt: moment()
  }
}

module.exports = sampleIndexPayload;
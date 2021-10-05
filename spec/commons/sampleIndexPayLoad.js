const moment                  = require('moment');
const validSampleIndexPayload = {
  _index: 'sandbox',
  _type:  'urlData',
  _id:    'GVED4',
  body:   {
    longUrl:   'https://www.facebook.com',
    shortUrl:  'bitlyshorturl/GVED1',
    urlId:     'GVED4',
    metaData:  {},
    createdAt: moment(),
    updatedAt: moment()
  }
}

const invalidSampleIndexPayload = {
  _indexs: 'sandbox',
  _type:   'urlData',
  _id:     'GVED4',
  body:    {
    longUrl:   'https://www.facebook.com',
    shortUrl:  'bitlyshorturl/GVED1',
    urlId:     'GVED4',
    metaData:  {},
    createdAt: moment(),
    updatedAt: moment()
  }
}
module.exports                  = {invalidSampleIndexPayload, validSampleIndexPayload};


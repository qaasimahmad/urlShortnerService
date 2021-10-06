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
    createdAt: '2021-10-05T22:41:43.109Z',
    updatedAt: '2021-10-05T22:41:43.109Z'
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
    createdAt: '2021-10-05T22:41:43.109Z',
    updatedAt: '2021-10-05T22:41:43.109Z'
  }
}
module.exports                  = {invalidSampleIndexPayload, validSampleIndexPayload};


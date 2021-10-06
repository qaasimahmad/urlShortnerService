const pick                                          = require('lodash/pick');
const moment                                        = require('moment');
const requestStream                                 = require('../../Libraries/common/request/stream');
const { elasticsearch:{ indexName, documentType } } = require('../../config/config');
const insertSingle                                  = require('../../Libraries/common/elasticsearch/inserts/insertSingle');// eslint-disable-line max-len

function buildPayloadAndSave(items, onSaved){
  const { longUrl, shortUrl } = items;
  const urlId                 = shortUrl.split('/')[2];

  const stream = requestStream(longUrl);

  stream.on('meta', (meta) => {
    const metaData = pick(meta, ['status', 'responseHeaders.server', 'cookieJar']);
    const payLoad  = {
      _index: indexName,
      _type:  documentType,
      _id:    urlId,
      body:   {
        shortUrl,
        longUrl,
        metaData,
        urlId,
        createdAt: moment(),
        updatedAt: moment(),
      },
    };

    insertSingle(payLoad, (err) => {
      const { shortUrl } = payLoad.body;
      if(err === null) return onSaved(null, { shortUrl, message: 'shortened Url Created Successfully' });
      return onSaved(err);
    });
  });
}
module.exports = buildPayloadAndSave;


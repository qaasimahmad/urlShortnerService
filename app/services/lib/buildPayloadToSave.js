const requestStream = require('../../../app/Libraries/common/request/stream');
const pick = require('lodash/pick');
const moment = require('moment');
const {elasticsearch:{indexName, documentType}} = require('../../config/config');
const insertSingle = require('../../Libraries/common/elasticsearch/inserts/insertSingle');

function buildPayloadAndSave(items, onSaved){
    const {longUrl, shortUrl} = items;
    const urlId = shortUrl.split('/')[1];

    const stream = requestStream(longUrl);
    stream.on("meta", (meta)=>{
        const metaData = pick(meta, ['status', 'responseHeaders.server', 'cookieJar']);
        const payLoad = {
            _index: indexName,
            _type: documentType, 
            _id: urlId,
            body: {
                shortUrl,
                longUrl,
                metaData,
                urlId,
                createdAt: moment(),
                updatedAt: moment()
            }
        };
        console.log('PayLoad >>', payLoad);
        insertSingle(payLoad,(err, result)=>{
            console.log('SavedResult >>', result);
            if(err === null) return onSaved(null, result);
            return onSaved(err);
        } )
    })
}
module.exports = buildPayloadAndSave;


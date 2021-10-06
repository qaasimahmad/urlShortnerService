const findByParam = require('../../Libraries/common/elasticsearch/search/findByParam');

function isExistsLongUrl(longUrl, onFound){
    
    const searchParam = {'longUrl.keyword': longUrl };

    findByParam(searchParam, (err, result)=>{
        if(err === null) return onFound(null, result);
        return onFound(err);
    });
}

module.exports = isExistsLongUrl;
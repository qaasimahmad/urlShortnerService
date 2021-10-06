const findByParam = require('../../../app/Libraries/common/elasticsearch/search/findByParam');

function expandShorturlAndRedirect(urlId, onExpanded){
    const searchParam = {'urlId.keyword': urlId};

    findByParam(searchParam, (err, result)=>{
        console.log('ExpnadedResult >>', result);
        if(err === null) return onExpanded(null, result[0].longUrl);
        return onExpanded(err);
    });
}

module.exports = expandShorturlAndRedirect;

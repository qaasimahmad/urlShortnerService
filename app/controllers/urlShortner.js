const shortenUrl = require('../services/lib/shortenUrl');
const buildPayloadAndSave = require('../services/lib/buildPayloadToSave');

const UrlShortnerController = {

    shortenUrl(req, res, next){
        const {longUrl} = req.body;
        console.log('BODY>>', req.body);
        shortenUrl(longUrl, (err, result)=>{
            if(err !== null) return res.status(400).json('unable to shorten the longUrlPassed');
            const items = {shortUrl: result, longUrl };
            buildPayloadAndSave(items, (err, result)=>{
                if(err === null) return res.status(200).json({result})
            })
        });
    }
}
module.exports = UrlShortnerController;

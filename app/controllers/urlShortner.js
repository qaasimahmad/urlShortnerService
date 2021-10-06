const shortenUrl                = require('../services/lib/shortenUrl');
const buildPayloadAndSave       = require('../services/lib/buildPayloadToSave');
const expandShortUrlAndRedirect = require('../services/lib/expandShortUrlAndRedirect');

const UrlShortnerController = {

  shortenUrl(req, res){
    const { longUrl } = req.body;

    shortenUrl(longUrl, (err, result) => {
      if(err !== null) return res.status(400).json( err );
      const items = { shortUrl: result, longUrl };

      buildPayloadAndSave(items, (err, result) => {
        if(err === null) return res.status(200).json({ result });
      });
    });
  },

  getLongurlByUrlId(req, res){
    const { urlId } = req.params;

    expandShortUrlAndRedirect(urlId, (err, result) => {
      if(err === null){
        return result.length === 0 ? res.status(404).json({result})
          : res.redirect(result);
      }
      return res.status(500).json('Unexpected Error Encountered!');
    });
  },
};

module.exports              = UrlShortnerController;

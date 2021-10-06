const express = require('express');

const router = express.Router();

const validate = require('../middleware/validation');

const { UrlShortner } = require('../schema/urlShortner');

const { shortenUrl, getLongurlByUrlId } = require('../controllers/urlShortner');

router.get('/', (req, res) => {
  res.json({ info: 'Welcome to url Shortner service' });
});

router.post('/shorten', validate(UrlShortner), shortenUrl);
router.get('/:urlId', getLongurlByUrlId);

module.exports = router;

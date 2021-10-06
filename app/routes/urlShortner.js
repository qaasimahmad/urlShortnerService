const express  = require('express');

const router = express.Router();

const validate = require('../middleware/validation');

const {UrlShortner} = require('../schema/urlShortner');

const {shortenUrl} = require('../controllers/urlShortner');

router.get('/', function(req, res){
  res.json({info: "Welcome to url Shortner service"})
})

router.post('/shorten', validate(UrlShortner), shortenUrl);

module.exports = router;
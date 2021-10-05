const express  = require('express');

const router = express.Router();

router.get('/', function(req, res){
  res.json({info: "Welcome to url Shortner service"})
})

module.exports = router;
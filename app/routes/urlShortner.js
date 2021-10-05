const express  = require('express');

const router = express.Router();

router.get('/', function(req, res, next){
  res.json({data: "Welcome to url Shortner service"})
})

module.exports = router;
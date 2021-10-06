const Joi = require('@hapi/joi');

exports.UrlShortner = Joi.object({

  longUrl: Joi.string()
    .required()
  
});
const Joi = require('@hapi/joi');

exports.UrlShortner = Joi.object({

  urlId: Joi.string()
    .required(),

  shortUrl: Joi.string()
    .required(),
  
  longUrl: Joi.string()
    .required(),

  metaData: Joi.object()
    .required(),

  createdAt: Joi.date()
    .required(),

  updatedAt: Joi.date()
    .required()
  
});
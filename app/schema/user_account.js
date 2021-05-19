const Joi = require('@hapi/joi');

exports.TransactionEntry = Joi.object({

  type: Joi.string()
    .required(),

  amount: Joi.number()
    .required(),
});
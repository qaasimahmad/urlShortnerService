const AccountServices = require('../services/AppServices');
const config = require('../config/config');

const resp = function (res, data, code, next) {
  res.status(code).json(data);
  return next();
};

const AccountControllers = {

  get_available_balance(req, res, next) {
    const { accountNumber } = req.query;
    if (!accountNumber) {
      resp(res, 'Missing required Field', 400, next);
    }
    AccountServices.get_account_balance(accountNumber, (response, code) => {
      resp(res, response, code, next);
    });
  },

  get_transaction_history(req, res, next) {
    const { accountNumber } = req.query;
    if (!accountNumber) {
      resp(res, 'Missing required Field', 400, next);
    }
    AccountServices.get_transaction_history(accountNumber, (response, code) => {
      resp(res, response, code, next);
    });
  },

  get_account_details(req, res, next) {
    const { accountNumber } = req.params;
    if (!accountNumber) {
      resp(res, 'Missing required Field', 400, next);
    }
    AccountServices.get_account_details(accountNumber, (response, code) => {
      resp(res, response, code, next);
    });
  },
  commit_transaction(req, res, next) {
    const { body } = req;
    const accountNumber = config.account.id;
    AccountServices.commit_transaction(accountNumber, body, (response, code) => {
      resp(res, response, code, next);
    });
  },

};
module.exports = AccountControllers;

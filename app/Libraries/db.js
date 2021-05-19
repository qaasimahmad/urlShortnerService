const config  = require('../config/config')
const accountNumber = config.account.id
const testAccountNumber = config.account.test_id

exports.accountNumber = accountNumber
exports.testAccountNumber = testAccountNumber

exports.accountDB = {
    [accountNumber]: {
      id: accountNumber,
      balance: 0.00,
      effectiveDateTime: new Date(),
    },
    [testAccountNumber]: {
      id: testAccountNumber,
      balance: 0.00,
      effectiveDateTime: new Date(),
    },
  };
exports.transactionHistoryDB = [];
/* eslint-disable no-param-reassign */
exports.initializeDB = ({ accountDB, accountNumber, transactionHistoryDB }) => {
  accountDB[accountNumber].balance = 2000;
  transactionHistoryDB = [];
  return { accountDB, transactionHistoryDB };
};

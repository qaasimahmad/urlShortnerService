const AsyncLock = require('async-lock');
const { accountDB, transactionHistoryDB } = require('../Libraries/db');

const lock = new AsyncLock();

const AppServices = {

  commit_transaction(accountNumber, body, callback) {
    const { amount, type } = body;

    const validTypes = ['credit', 'debit'];

    if (Number.isNaN(amount) || !validTypes.includes(type)) {
      return callback({ err: true, response: 'Invalid amount provided' }, 400);
    }
    if (type === 'credit') {
      this.credit_account(accountNumber, amount, (response, code) => {
        if (code === 200) {
          return callback(response, code);
        }

        return callback(response, code);
      });
    } else {
      this.debit_account(accountNumber, amount, (response, code) => {
        if (code === 200) {
          return callback(response, code);
        }

        return callback(response, code);
      });
    }
  },

  save_transaction(data) {
    transactionHistoryDB.push(data);
  },

  get_account_details(accountNumber, callback) {
    if (lock.isBusy(accountNumber)) throw new Error(`Service Unavailable: code: ${503}`);
    return callback({ err: false, response: 'operation successfull', data: { ...accountDB[accountNumber] } }, 200);
  },

  get_account_balance(accountNumber, callback) {
    if (lock.isBusy(accountNumber)) throw new Error(`Service Unavailable: code: ${503}`);

    const currentAccountBalance = accountDB[accountNumber].balance;
    if (currentAccountBalance || currentAccountBalance !== null) {
      return callback({ err: false, response: 'operation successful', data: { currentAccountBalance } }, 200);
    }
    return callback({ err: true, response: 'Could not get Account Balance' }, 500);
  },

  credit_account(accountNumber, amount, callback) {
    const account = accountDB[accountNumber];
    account.balance += amount;
    account.effectiveDateTime = new Date();
    this.save_transaction({ ...account, amount, type: 'credit' });
    return callback({ err: false, response: 'operation successful', data: account }, 200);
  },

  debit_account(accountNumber, amount, callback) {
    const account = accountDB[accountNumber];
    if (account.balance < amount) {
      return callback({ err: true, response: 'Insufficient balance', data: account }, 422);
    }
    account.balance -= amount;
    account.effectiveDateTime = new Date();

    this.save_transaction({ ...account, amount, type: 'debit' });
    return callback({ err: false, response: 'operation successful', data: account }, 200);
  },

  get_transaction_history(accountNumber, callback) {
    if (lock.isBusy(accountNumber)) {
      return callback({ err: true, response: 'Service Unavailble' }, 503);
    }
    const returnedTransactions = [...transactionHistoryDB.filter((item) => item.id === accountNumber)];
    return callback({ err: false, response: 'operation successfull', data: { returnedTransactions } }, 200);
  },

};

module.exports = AppServices;

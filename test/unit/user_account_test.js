/* eslint-disable no-undef */
const chai = require('chai');
const AccountServices = require('../../app/services/AppServices');
const { initializeDB } = require('../commons/common');

const { expect } = chai;

const { accountDB, transactionHistoryDB, testAccountNumber } = require('../../app/Libraries/db');

beforeEach(() => initializeDB({ accountDB, accountNumber: testAccountNumber, transactionHistoryDB }));

describe('Money Accounting App', () => {
  describe('get_account_balance', () => {
    it('should return user account balance', () => {
      AccountServices.get_account_balance(testAccountNumber, (response, code) => {
        if (code === 200) {
          expect(response.data.currentAccountBalance).equal(2000);
        }
      });
    });
  });

  describe('get_transaction_history', () => {
    it('should return user transaction history', () => {
      AccountServices.commit_transaction(testAccountNumber, { type: 'credit', amount: 1000 }, (response, code) => {
        if (code === 200) {
          AccountServices.commit_transaction(testAccountNumber, { type: 'debit', amount: 500 }, (response, code) => {
            if (code === 200) {
              AccountServices.get_transaction_history(testAccountNumber, (response, code) => {
                if (code === 200) {
                  expect(response.data.returnedTransactions).to.have.lengthOf(2);
                  expect(response.data.returnedTransactions[0].type).to.equal('credit');
                  expect(response.data.returnedTransactions[1].type).to.equal('debit');
                }
              });
            }
          });
        }
      });
    });
  });

  describe('commit_transaction', () => {
    it('should credit user with the amount provided if type is credit', () => {
      AccountServices.commit_transaction(testAccountNumber, { type: 'credit', amount: 1000 }, (response, code) => {
        if (code === 200) {
          expect(response.data.balance).to.be.equal(3000);
        }
      });
    });

    it('should debit user with the amount provided if type is debit', () => {
      AccountServices.commit_transaction(testAccountNumber, { type: 'debit', amount: 100 }, (response, code) => {
        console.log('Debit-Result>>', response);
        if (code == 200) {
          expect(response.data.balance).to.be.equal(1900);
        }
      });
    });

    it('no debit occurs when balance is less than amount provided', () => {
      AccountServices.commit_transaction(testAccountNumber, { type: 'debit', amount: 10000 }, (response, code) => {
        expect(code === 422 && response === 'Insufficient balance');
      });
    });
  });
});

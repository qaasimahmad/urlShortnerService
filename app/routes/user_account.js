const express = require('express');
const validate = require('../middleware/validation')

const { TransactionEntry } = require('../schema/user_account');

const router = express.Router();
const {
    get_available_balance,
    get_account_details,
    get_transaction_history,
    commit_transaction
  } = require('../controllers/user_account');

router.get('/accountBalance', get_available_balance);
router.get('/transactionHistory', get_transaction_history);
router.get('/accountDetails/:accountNumber', get_account_details);
router.post('/commitTransaction', validate(TransactionEntry), commit_transaction);

module.exports = router;
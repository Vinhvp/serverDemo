const express = require('express');
const router = express.Router();

const accountController = require('../app/controllers/AccountController');
// productListController.productList
router.use('/verify/', accountController.updateVerify);
router.use('/forgotPass/', accountController.updatePasswordAgain);
router.use('/editAccount/', accountController.updatePassword);
router.use('/productDetails/get', accountController.getProducts);
router.use('/productDetails', accountController.addProducts);
router.use('/get', accountController.getVerify);
router.use('/login/', accountController.login);
router.use('/', accountController.updateAccounts);

module.exports = router;
/**
const express = require('express');
const { processPayment, paytmResponse, getPaymentStatus } = require('../controllers/paymentController');
const { isAuthenticatedUser } = require('../middlewares/auth');

const router = express.Router();

router.route('/payment/process').post(processPayment);
// router.route('/stripeapikey').get(isAuthenticatedUser, sendStripeApiKey);

router.route('/callback').post(paytmResponse);

router.route('/payment/status/:id').get(isAuthenticatedUser, getPaymentStatus);

module.exports = router;
 */
const express = require('express');
const { processPayment, razorpayCallback, getRazorpayPaymentStatus } = require('../controllers/paymentControllernew'); // Add Razorpay controller imports
const { isAuthenticatedUser } = require('../middlewares/auth');

const router = express.Router();


router.route('/process/payment').post(processPayment);
//router.route('/razorpay/callback').post(razorpayCallback);
//router.route('/razorpay/payment/status/:id').get(isAuthenticatedUser, getRazorpayPaymentStatus);

router.route('/callback').post(razorpayCallback);
router.route('/payment/status/:id').get(isAuthenticatedUser, getRazorpayPaymentStatus);


module.exports = router;


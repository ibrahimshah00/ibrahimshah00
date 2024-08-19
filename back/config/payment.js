// // payment.js
// const express = require('express');
// const stripe = require('stripe')('sk_test_51PoOAJ00fqy6sCtbSzpLnxp2Osu4j4QTzew2hiIf4dVf5mrGub7icQiBkr6lRkWbz313skHWfloOM1FfOARGG0Nt00sFLOYs3s'); // Replace with your Stripe secret key
// const router = express.Router();

// router.post('/payment', async (req, res) => {
//     const { paymentMethodId, amount } = req.body;
  
//     try {
//       // Create a Payment Intent with automatic payment methods enabled
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: amount, // amount in cents
//         currency: 'usd',
//         payment_method: paymentMethodId,
//         confirm: true,
//         automatic_payment_methods: {
//           enabled: true,
//         },
//         // Specify the return URL
//         return_url: 'http://localhost:3000/', // Replace with your homepage URL
//       });
  
//       // Respond with the client secret and payment intent status
//       res.json({
//         clientSecret: paymentIntent.client_secret,
//         status: paymentIntent.status,
//       });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  

// module.exports = router;
const express = require('express');
const stripe = require('stripe')('sk_test_51PoOAJ00fqy6sCtbSzpLnxp2Osu4j4QTzew2hiIf4dVf5mrGub7icQiBkr6lRkWbz313skHWfloOM1FfOARGG0Nt00sFLOYs3s'); // Replace with your Stripe secret key
const router = express.Router();

router.post('/payment', async (req, res) => {
  const { paymentMethodId, amount } = req.body;

  try {
    // Create a Payment Intent with automatic payment methods enabled
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // amount in cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
      },
      // Specify the return URL
      return_url: 'http://localhost:3000/', // Replace with your homepage URL
    });

    // Respond with the client secret and payment intent status
    res.json({
      clientSecret: paymentIntent.client_secret,
      status: paymentIntent.status,
    });
  } catch (error) {
    console.error('Payment error:', error.message); // Log error message
    res.status(500).json({ error: error.message });
  }
});


// router.post('/payment', async (req, res) => {
//     const { paymentMethodId, amount } = req.body;
  
//     // Validate that amount is a number and convert it to an integer
//     if (isNaN(amount) || amount <= 0) {
//       return res.status(400).json({ error: 'Invalid amount' });
//     }
  
//     try {
//       // Create a Payment Intent
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: parseInt(amount, 10), // Ensure amount is an integer
//         currency: 'usd',
//         payment_method: paymentMethodId,
//         confirm: true,
//         automatic_payment_methods: {
//           enabled: true,
//           allow_redirects: 'if_required',
//         },
//         return_url: 'http://localhost:3000/',
//       });
  
//       res.json({
//         clientSecret: paymentIntent.client_secret,
//         status: paymentIntent.status,
//       });
//     } catch (error) {
//       console.error('Payment error:', error.message);
//       res.status(500).json({ error: error.message });
//     }
//   });
  

module.exports = router;

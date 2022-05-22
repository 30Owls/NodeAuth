const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');



// after '/auth' routes

router.get('/', (req, res) => {
    res.json({
        message: '🔒'
    })
});

router.post(
    '/signup',
    //user need to be an email
    body('username').isEmail().withMessage('Username is need to be an email'),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }).withMessage('Your password must be at least 5 chars long'),
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({
        message : req.body
    })
});

module.exports = router;
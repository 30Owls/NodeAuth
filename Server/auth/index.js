const express = require('express');
const router = express.Router();


// after '/auth' routes

router.get('/', (req, res) => {
    res.json({
        message: '🔒'
    })
});

module.exports = router;
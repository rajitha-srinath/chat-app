const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('serve is up and runnig');
});

module.exports = router;
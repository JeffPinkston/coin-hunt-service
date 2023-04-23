let express = require('express');
const cubies  = require('../data/cubies');
let router = express.Router();

router.get('/', (req, res) => {
    return res.send(cubies)
})

module.exports = router;
let express = require('express');
const cubies  = require('../data/cubies');
let router = express.Router();

router.get('/', (req, res) => {
    return res.send(cubies['records'])
})

router.get('/:cubieId', (req, res) => {
    return res.send(cubies['records'].filter(cubie => cubie.ID === Number(req.params.cubieId)));
})

module.exports = router;
let express = require('express');
let router = express.Router();
let { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    return res.send(Object.values(messages))
});

router.get('/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

router.post('/', (req, res) => {
    const id = uuidv4()
    console.log(req.body)
    console.log(id)
    const message = {
        id: id,
        text: req.body.text,
    }
    console.log(message)
   
    
    message[id] = message;
   
    console.log(stringify(message));
    return res.send(stringify(message));
})


function stringify(obj) {
    let cache = [];
    let str = JSON.stringify(obj, function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // reset the cache
    return str;
}

module.exports = router;
var express = require('express');
var router = express.Router();
var user = require('../controllers/user');

router.get("/", (req, res) => {

  res.json({ message: "Welcome to the node application" });
});

router.post('/data', user.create);

router.get('/user/:username', user.find);

router.put('/updatebyid', user.updateById);

router.put('/update', user.update);

router.delete('/delete', user.delete);

module.exports = router;
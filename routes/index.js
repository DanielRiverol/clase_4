const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.json({msg: "Pagina de inicio"});
  res.status(200).json({"msg":"Pagina"})
});
router.post('/', function(req, res, next) {
  //res.json({msg: "Pagina de inicio"});
  res.status(201).json({"msg":"Pagina"})
});

module.exports = router;

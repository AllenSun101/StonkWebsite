var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.send("API IS WORKING YEAH");
});

module.exports = router;

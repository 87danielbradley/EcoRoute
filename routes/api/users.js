const express = require("express");
const router = express.Router();

router.get("/test", (request, response) => response.json({msg: "The users route is working"}));

module.exports = router;
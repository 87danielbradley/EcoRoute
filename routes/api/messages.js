const validateMessageInput = require("../../validation/messages");

const express = require("express");
const router = express.Router();
const passport = require('passport');
const Message = require('../../models/Message');



router.get("/test", (request, response) => response.json({msg: "The messages route is working"}));



module.exports = router;
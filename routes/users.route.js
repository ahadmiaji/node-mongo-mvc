const express = require("express");

const { getUsers, saveUser } = require("../controllers/users.controller");

const router = express.Router();


router.get("/users", getUsers); //(all code has been in controller).

router.post("/users", saveUser); //(all code has been in a controller).

module.exports = router;
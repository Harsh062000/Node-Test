const express = require("express");
const router = express.Router();

const { createUser,
       getUser,
       updateUser,
       deleteUser
} = require('../controller/user');
const { model } = require("mongoose");

router.get('/getuserdata/:id', getUser);
router.post('/createuser', createUser);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);

module.exports = router;

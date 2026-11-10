//endpoints
const express = require('express');
const router= express.Router();
const userController = require('../controllers/userController');

//endpoint to handle employees data retrieval
router.get('/water-bills', userController.getAllUsers); //function name
//router.get('/hello', userController.getHello);
//router.get("/users/:id",userController.getUserById);
//router.get("/users/ip/:ip_address",userController.getUserByIp);
//router.get('/users/:ip_email', userController.getUserByIpOrEmail);
router.post('/water-bills',userController.createUser);
router.put('/water-bills', userController.updateUser);
router.delete('/water-bills',userController.deleteUser);

module.exports = router;
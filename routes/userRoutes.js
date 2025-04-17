const express = require('express');
const { loginUser, getUsers, getUserById, createUser, updateUser} = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/login', loginUser);
router.post('/registrar', createUser);
router.post('/:id', updateUser);

module.exports = router;
const express = require('express') //importamos express 

const { createUser, updateUser, deleteUser } = require('../controllers/users')

const router = express.Router()


router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
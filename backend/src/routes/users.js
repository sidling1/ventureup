const { Router } = require('express')

const {
    getUserInfo
} = require('../controllers/users')

const router = Router()

router.get('/info',getUserInfo)


module.exports = router

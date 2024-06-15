const { Router } = require('express')

const {
    getUserInfo,
    getSavedResources
} = require('../controllers/users')

const router = Router()

router.get('/info',getUserInfo)
router.get('/saved-resources',getSavedResources)

module.exports = router

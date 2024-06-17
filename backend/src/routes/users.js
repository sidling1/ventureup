const { Router } = require('express')

const {
    getUserInfo,
    getSavedResources,
    initSelfProfile,
    editSelfProfile,
    getSelfProfile,
    getUserProfile
} = require('../controllers/users')

const router = Router()

router.get('/info',getUserInfo)
router.get('/saved-resources',getSavedResources)
router.post('/init-profile',initSelfProfile)
router.post('/update-profile', editSelfProfile)
router.get('/myprofile', getSelfProfile)
router.get('/profile', getUserProfile)


module.exports = router

const { Router } = require('express')
const { uploadNewResource } = require('../controllers/resource')
// const {
//     getUserInfo,
//     getSavedResources
// } = require('../controllers/users')

const router = Router()

// router.get('/info',getUserInfo)
// router.get('/saved-resources',getSavedResources)
router.post('/upload',uploadNewResource);

module.exports = router

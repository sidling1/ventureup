const { Router } = require('express')
const { 
    uploadNewResource,
    getResourcefromId
} = require('../controllers/resource')
// const {
//     getUserInfo,
//     getSavedResources
// } = require('../controllers/users')

const router = Router()

// router.get('/info',getUserInfo)
// router.get('/saved-resources',getSavedResources)
router.post('/upload', uploadNewResource);
router.get('/info', getResourcefromId);

module.exports = router

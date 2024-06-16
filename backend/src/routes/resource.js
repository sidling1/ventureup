const { Router } = require('express')
const { 
    uploadNewResource,
    getResourcefromId,
    likeResource,
    unlikeResource,
    saveResource,
    removeSavedResource
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
router.post('/like', likeResource);
router.delete('/unlike', unlikeResource);
router.post('/save', saveResource);
router.delete('/removesaved', removeSavedResource);

module.exports = router

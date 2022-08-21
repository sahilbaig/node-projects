const express= require('express')
const router= express.Router()
const {getAllTasks,createTask,getTaskById,updateTask} = require('../controllers/task')

// /api/
router.route('/task').get(getAllTasks)
router.route('/task').post(createTask)
router.route('/task/:id').get(getTaskById)
router.route('/update/:id').post(updateTask)

module.exports=router
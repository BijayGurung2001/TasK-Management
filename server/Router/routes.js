const express=require('express')
const router=express.Router();
const taskcontroller=require("../controller/taskcontoller")


router.get('/', taskcontroller.dashboard);
router.post('/task', taskcontroller.taskinput);
router.get('/status', taskcontroller.taskstatus);
router.post('/history', taskcontroller.taskhistory);
router.get('/historydata', taskcontroller.history);



module.exports= router
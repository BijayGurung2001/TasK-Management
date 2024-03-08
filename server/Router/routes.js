const express=require('express')
const router=express.Router();
const taskcontroller=require("../controller/taskcontoller")


router.get('/', taskcontroller.dashboard);
router.post('/task', taskcontroller.taskinput);
router.get('/status', taskcontroller.taskstatus);



module.exports= router
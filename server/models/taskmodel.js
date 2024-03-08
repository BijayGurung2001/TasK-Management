const mongoose=require('mongoose');

const taskSchema= new mongoose.Schema({
  title:{type: "String", required:true},
  date: {type:"date", required:true},
  description:{type:"String", required:true},
  status:{type:"string", default:false},
})
const Task =mongoose.model('Task', taskSchema);

module.exports=Task;
const mongoose= require('mongoose')

const historySchema= new mongoose.Schema({
    title:{type: "String", required:true},
  date: {type:"date", required:true},
  description:{type:"String", required:true},
  status:{type:"string", default:"Complete"},
})

const TaskHistory= mongoose.model("Taskhistory",historySchema)

module.exports= TaskHistory;
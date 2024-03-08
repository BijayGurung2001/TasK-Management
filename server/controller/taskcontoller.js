
const User=require('../models/User')
const Task=require('../models/taskmodel')
const TaskHistory=require('../models/TaskHistory')

exports.dashboard=async(req,res)=>{

  try {
    
    const result = await User.find()
    console.log(result)
    if (result.length > 0) {
      console.log("User found:", result[0].name);
      res.json(result);
    } else {
      console.log("User not found");
      res.status(404).send({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error occurred in finding user details:", error);
    res.status(500).send({ error: "Internal server error" });
  }
};

exports.taskinput=(req,res)=>{
    const data=req.body;
    console.log(data)

    const task= new Task({title:data.title, date:data.deadline, description: data.description})
    task.save()
    .then(savedTask=>{
      console.log("Task data inserted successfully", );
    })
    .catch(err=>{
      console.log("error occurred in inserting task data", err);
    })
}

exports.taskstatus=async(req,res)=>{
  try {
    const result= await Task.find();
   
    res.status(200).json(result)
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

exports.taskhistory=async(req,res)=>{
  try {
    const taskid=req.body.taskid;

    const task= await Task.findOne({id: taskid});
         if(!task){
          return res.status(404).json({error:"Task nott found"})
         }
         await Task.deleteOne({_id: taskid})

        const historyEntry=new TaskHistory({
          title: task.title,
          date:task.date,
          description:task.description,
        })
         await historyEntry.save();
           
  } catch (error) {
    console.error("Error fetching tasks:", error)
    res.status(500).json({ error: "Internal server error" });
  }
}
exports.history=async(req,res)=>{
  try {
    const historydata= await TaskHistory.find()
         res.status(200).json(historydata);
  } catch (error) {
    console.log("error in sending data into history", error)
    res.status(500).json({ error: "Internal server error" });
  }
  
}
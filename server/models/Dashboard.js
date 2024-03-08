const mongoose=require('mongoose');

const dashboardschema= new mongoose.Schema({
    name:{type:"string", required:true},
    email:{type:"string", required:true},
    address:{type:"string", required:true},
})
const dashboard= mongoose.model('dashboard',dashboardschema)
module.exports= dashboard
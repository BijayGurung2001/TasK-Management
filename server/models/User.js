const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    name:{type: 'string', required:true},
    email:{type: 'string', required:true},
    address:{type: 'string', required:true},
})
const User= mongoose.model('User',Userschema)

module.exports=User;


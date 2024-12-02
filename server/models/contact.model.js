const mongoose=require('mongoose')

const ContactSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name:String,
    email:String,
    message:String
},{timestamps:true})

module.exports=mongoose.model('Contact',ContactSchema)
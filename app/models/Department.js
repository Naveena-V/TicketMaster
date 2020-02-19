const mongoose=require('mongoose')
const Schema=mongoose.Schema

const DepatementSchema= new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        max:10
    }
})

const Department=mongoose.model('Department',DepatementSchema)

module.exports=Department
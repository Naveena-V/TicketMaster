const mongoose=require('mongoose')
const Schema=mongoose.Schema

const TicketSchema=new Schema({
    code:{
        type:String,
        required:true,
        unique:true,
    },
    customer:{
        type:String,
        required:true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department',
        required:true
    },
    employees:{
        type:Schema.Types.ObjectId,
        ref:'Employee',
        required:true,
    },
    message:{
        type:String
    },
    priority:{
        type:String,
        required:true,
        enum : ['high', 'medium', 'low']
    }
})
const Ticket=mongoose.model('Ticket',TicketSchema)
module.exports=Ticket

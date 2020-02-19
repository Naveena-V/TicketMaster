const Ticket=require('../models/Ticket')

module.exports.list=(req,res)=>{
    Ticket.find()
        .then((tickets)=>{
            res.json(tickets)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.add=(req,res)=>{
    const body=req.body
    const ticket=new Ticket(body)
    ticket.save()
        .then((tickets)=>{
            if(tickets){
                res.json(tickets)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Ticket.findById(id)
        .then((tickets)=>{
            if(tickets){
                res.json(tickets)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Ticket.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then((tickets)=>{
            if(tickets){
                res.json(tickets)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.remove=(req,res)=>{
    const id=req.params.id
    Ticket.findByIdAndDelete(id)
        .then((tickets)=>{
            if(tickets){
                res.json(tickets)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
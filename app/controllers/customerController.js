const Customer=require('../models/customerModel')

module.exports.list=(req,res)=>{
    Customer.find()
        .then((customers)=>{
            res.json(customers)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Customer.findById(id)
        .then((customers)=>{
            if(customers){
                res.json(customers)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.add=(req,res)=>{
    const body=req.body
    const customer=new Customer(body)
    customer.save()
        .then((customers)=>{
            if(customers){
                res.json(customers)
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
    Customer.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then((customers)=>{
            if(customers){
                res.json(customers)
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
    Customer.findByIdAndDelete(id)
    .then((customers)=>{
        if(customers){
            res.json(customers)
        } else {
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}
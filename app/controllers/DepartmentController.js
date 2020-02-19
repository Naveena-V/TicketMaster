const Department=require('../models/Department')

module.exports.list=(req,res)=>{
    Department.find()
        .then((departments)=>{
                res.json(departments)
            })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Department.findById(id)
        .then((departments)=>{
            if(departments){
                res.json(departments)
            } else {
                res.json({})
            }
        })
}

module.exports.add=(req,res)=>{
    const body=req.body
    const department=new Department(body)
    department.save()
        .then((departments)=>{
            if(departments){
                res.json(departments)
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
    Department.findByIdAndDelete(id)
        .then((departments)=>{
            if(departments){
                res.json(departments)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
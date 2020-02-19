const Employee=require('../models/Employee')

module.exports.list=(req,res)=>{
    Employee.find().populate("department")
        .then((employees)=>{
            res.json(employees)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.add=(req,res)=>{
    const body=req.body
    const employee=new Employee(body)
    employee.save()
        .then((employees)=>{
            if(employees){
                res.json(employees)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Employee.findById(id)
        .then((employees)=>{
            if(employees){
                console.log(employees)
                res.json(employees)
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
    Employee.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then((employees)=>{
            if(employees){
                res.json(employees)
            } else {
                res.json(employees)
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.remove=(req,res)=>{
    const id=req.params.id
    Employee.findByIdAndDelete(id)
        .then((employees)=>{
            if(employees){
                res.json(employees)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
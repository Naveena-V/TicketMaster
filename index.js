const express=require('express')
const setupDB=require('./config/Datatbase')
const router=require('./config/Routes')
const app=express()
const port=3016

app.use(express.json())
setupDB()

app.get('/',(req,res)=>{
    //console.log('Welcome to Ticket-Master App')
    res.json({
        'notice':'welcome to ticket-master'
    })
})

app.use('/',router)

app.listen(port,()=>{
    console.log('Listening Port',port)
})
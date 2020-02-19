const express=require('express')
const router=express.Router()
const customerController=require('../app/controllers/customerController')
const departmentController=require('../app/controllers/DepartmentController')
const EmployeeController=require('../app/controllers/EmployeeController')
const TicketContoller=require('../app/controllers/TicketContoller')
//Customers
router.get('/customers',customerController.list)
router.get('/customers/:id',customerController.show)
router.post('/customers',customerController.add)
router.put('/customers/:id',customerController.update)
router.delete('/customers/:id',customerController.remove)

//Department
router.get('/departments',departmentController.list)
router.get('/departments/:id',departmentController.show)
router.post('/departments',departmentController.add)
router.delete('/departments/:id',departmentController.remove)

//Employee
router.get('/employees',EmployeeController.list)
router.post('/employees',EmployeeController.add)
router.get('/employees/:id',EmployeeController.show)
router.put('/employees/:id',EmployeeController.update)
router.delete('/employees/:id',EmployeeController.remove)
module.exports=router

//Tickets
router.get('/tickets',TicketContoller.list)
router.post('/tickets',TicketContoller.add)
router.get('/tickets/:id',TicketContoller.show)
router.put('/tickets/:id',TicketContoller.update)
router.delete('/tickets/:id',TicketContoller.remove)
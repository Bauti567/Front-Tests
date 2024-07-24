// this is my routes file
import { Router } from "express";
import { getEmployees, createEmployee, updataEmployee, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router()


router.get('/employees', getEmployees)
router.post('/employees', createEmployee)
router.put('/employees', updataEmployee)
router.delete('/employees', deleteEmployee)




export default router;
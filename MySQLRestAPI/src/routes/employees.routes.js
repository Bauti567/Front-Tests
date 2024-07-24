// this is my routes file
import { Router } from "express";
import { getEmployees, getEmployee , createEmployee, updataEmployee, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router()


router.get('/employees', getEmployees)

// Consultando por id
router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployee)
router.put('/employees', updataEmployee)
router.delete('/employees', deleteEmployee)




export default router;
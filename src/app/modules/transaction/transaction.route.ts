import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { transactionSchema } from "./transaction.validation";
import { TransactionContoler } from "./transaction.controller";



const route = Router()


route.post("/top-up",validateRequest(transactionSchema),TransactionContoler.addMoney)



export const transactionRoute = route
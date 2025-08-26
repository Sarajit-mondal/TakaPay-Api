import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { TopUPTransactionSchema, transactionSchema } from "./transaction.validation";

import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { TransactionContoler } from "./transaction.controller";



const route = Router()



route.get("/", checkAuth(Role.ADMIN),TransactionContoler.getAllTransactionsHistory,
)



export const transactionRoute = route
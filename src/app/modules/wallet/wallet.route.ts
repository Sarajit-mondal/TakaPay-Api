import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { TransactionContoler } from "./wallet.controller";
import { TopUPTransactionSchema, transactionSchema } from "../transaction/transaction.validation";



const route = Router()


route.post("/top-up",validateRequest(TopUPTransactionSchema),checkAuth(Role.USER),TransactionContoler.addMoney)
route.post("/withdraw",validateRequest(transactionSchema),checkAuth(Role.USER),TransactionContoler.withdrawMoney)
route.post("/send-money",validateRequest(transactionSchema),checkAuth(Role.USER,Role.AGENT),TransactionContoler.sendMoney)
route.get("/history",checkAuth(Role.ADMIN),TransactionContoler.transactionsHistory)



export const walletRoute = route
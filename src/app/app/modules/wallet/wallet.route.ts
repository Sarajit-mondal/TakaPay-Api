import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { WalletContoler } from "./wallet.controller";
import { TopUPTransactionSchema, transactionSchema } from "../transaction/transaction.validation";



const route = Router()


route.patch("/add-money",validateRequest(TopUPTransactionSchema),checkAuth(Role.USER),WalletContoler.addMoney)
route.patch("/withdraw",validateRequest(transactionSchema),checkAuth(Role.USER),WalletContoler.withdrawMoney)
route.patch("/send-money",validateRequest(transactionSchema),checkAuth(Role.USER,Role.AGENT),WalletContoler.sendMoney)
route.get("/",checkAuth(Role.ADMIN),WalletContoler.getAllWallets)
route.get("/:userId",checkAuth(Role.ADMIN),WalletContoler.getOneWallet)




export const walletRoute = route
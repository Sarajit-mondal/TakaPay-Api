import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { TopUPTransactionSchema, transactionSchema } from "./transaction.validation";

import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";



const route = Router()



route.get("/history",
)



export const transactionRoute = route
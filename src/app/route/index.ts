import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { transactionRoute } from "../modules/transaction/transaction.route";

export const router = Router()
const moduleRoutes = [
    {
        path:"/user",
        route: userRoute
    },
    {
        path:"/transation",
        route: transactionRoute
    }
]


moduleRoutes.forEach(route =>{
  router.use(route.path,route.route)
})
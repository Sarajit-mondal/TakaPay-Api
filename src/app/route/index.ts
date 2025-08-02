import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { transactionRoute } from "../modules/transaction/transaction.route";
import { AuthRoutes } from "../modules/auth/auth.route";

export const router = Router()
const moduleRoutes = [
    {
        path:"/user",
        route: userRoute
    },
    {
        path:"/transations",
        route: transactionRoute
    },
    {
        path:"/wallet",
        route: transactionRoute
    },
    {
        path:"/auth",
        route: AuthRoutes
    }
]


moduleRoutes.forEach(route =>{
  router.use(route.path,route.route)
})
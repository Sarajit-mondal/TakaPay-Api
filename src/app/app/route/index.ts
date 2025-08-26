import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { walletRoute } from "../modules/wallet/wallet.route";
import { transactionRoute } from "../modules/transaction/transaction.route";
import { adminRoute } from "../modules/admin/admin.route";

export const router = Router()
const moduleRoutes = [
    {
        path:"/user",
        route: userRoute
    },

    {
        path:"/wallet",
        route: walletRoute
    },
    {
        path:"/auth",
        route: AuthRoutes
    },
    {
        path:"/transactions",
        route: transactionRoute
    },
    {
        path:"/admin",
        route: adminRoute
    }
]


moduleRoutes.forEach(route =>{
  router.use(route.path,route.route)
})
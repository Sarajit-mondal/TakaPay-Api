import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { walletRoute } from "../modules/wallet/wallet.route";

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
    }
]


moduleRoutes.forEach(route =>{
  router.use(route.path,route.route)
})
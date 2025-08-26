import { Router } from "express"
import { checkAuth } from "../../middlewares/checkAuth"
import { validateRequest } from "../../middlewares/validateRequest"
import { Role } from "../user/user.interface"
import { userUpdateZodSchema } from "../user/user.validation"
import { UserContoler } from "./admin.controller"



const route = Router()

route.patch("/agent-suspend/:id",validateRequest(userUpdateZodSchema),checkAuth(Role.ADMIN),UserContoler.agentSuspandANdApprove)

route.patch("/user-block/:id",validateRequest(userUpdateZodSchema),checkAuth(Role.ADMIN),UserContoler.userBlockAndUnblock)



export const adminRoute = route
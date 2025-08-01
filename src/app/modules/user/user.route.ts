import { Router } from "express";
import { UserContoler } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { userZodSchema } from "./user.validation";


const route = Router()


route.post("/create",validateRequest(userZodSchema),UserContoler.createUser)



export const userRoute = route
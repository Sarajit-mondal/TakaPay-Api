import { Router } from "express";
import { UserContoler } from "./user.controller";


const route = Router()


route.post("/create",UserContoler.createUser)



export const userRoute = route
import { Request, Response } from "express"
import { userService } from "./user.service"





const createUser = async(req:Request,res:Response)=>{
   try {
     const user =await userService.createUser(req.body)

     res.send(user)
   } catch (error) {
    console.log(error)
   }
}





export const UserContoler = {
    createUser
}
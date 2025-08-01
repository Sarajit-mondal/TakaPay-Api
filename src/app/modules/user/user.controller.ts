import { Request, Response } from "express"
import { userService } from "./user.service"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status-codes";




const createUser = catchAsync(async(req:Request,res:Response)=>{
   const user =await userService.createUser(req.body)

   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "User Create Successfully",
    data : user
   })
     
})





export const UserContoler = {
    createUser
}
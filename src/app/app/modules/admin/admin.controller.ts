import { Request, Response } from "express"
import { userService } from "./admin.service"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status-codes";




const userBlockAndUnblock = catchAsync(async(req:Request,res:Response)=>{
   const updateUser =await userService.userBlockAndUnblock(req.body,req.params.id)

   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "User Update Successfully",
    data : updateUser
   })
     
})
const agentSuspandANdApprove = catchAsync(async(req:Request,res:Response)=>{
   const updateAgent =await userService.agentSuspandAndApprove(req.body,req.params.id)

   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "Agent Update Successfully",
    data : updateAgent
   })
     
})





export const UserContoler = {
    userBlockAndUnblock,
    agentSuspandANdApprove
}
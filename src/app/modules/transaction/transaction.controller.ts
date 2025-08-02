import { Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status-codes";
import { transactionService } from "./transaction.service";




const addMoney = catchAsync(async(req:Request,res:Response)=>{
   const trx =await transactionService.addMoney(req.body)

   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "Add Money Successfully",
    data : trx
   })
     
})





export const TransactionContoler = {
    addMoney
}
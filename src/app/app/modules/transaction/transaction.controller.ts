import { Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status-codes";
import { transactionService } from "./transaction.service";
const getAllTransactionsHistory = catchAsync(async(req:Request,res:Response)=>{
 const transactions =await transactionService.getAllTransactionsHistory()
   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "One Wallet get Successfully",
    data : transactions
   })
     
})



export const TransactionContoler = {

  getAllTransactionsHistory,
}
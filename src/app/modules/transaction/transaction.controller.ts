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
const withdrawMoney = catchAsync(async(req:Request,res:Response)=>{
   const trx =await transactionService.withdrawMoney(req.body)

   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "Money Withdraw Successfully",
    data : trx
   })
     
})
const sendMoney = catchAsync(async(req:Request,res:Response)=>{
   const trx =await transactionService.sendMoney(req.body)

   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "Send Money Successfully",
    data : trx
   })
     
})
const transactionsHistory = catchAsync(async(req:Request,res:Response)=>{
   const alltransactions =await transactionService.transactionsHistory()

   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "All Transactions Successfully",
    data : alltransactions
   })
     
})





export const TransactionContoler = {
addMoney,
  withdrawMoney,
  sendMoney,
  transactionsHistory
}
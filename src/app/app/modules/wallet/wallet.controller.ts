import { Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status-codes";
import { transactionService } from "./wallet.service";




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
const getAllWallets = catchAsync(async(req:Request,res:Response)=>{
   const wallets =await transactionService.getAllWallets()

   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "All Wallets get Successfully",
    data : wallets
   })
     
})
const getOneWallet = catchAsync(async(req:Request,res:Response)=>{
   const {userId} = req.params
   const wallet =await transactionService.getOneWallet(userId)

   sendResponse(res,{
    success : true,
    statusCode: httpStatus.CREATED,
    message: "One Wallet get Successfully",
    data : wallet
   })
     
})



export const WalletContoler = {
addMoney,
  withdrawMoney,
  sendMoney,
  getAllWallets,
  getOneWallet
  
}
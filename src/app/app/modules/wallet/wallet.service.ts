import { ObjectId } from "mongoose";
import { makeTransationHistory } from "../../utils/makeTransationsHistory";
import { Transaction } from "../transaction/transaction.model";
import { ITransaction } from "../transaction/transation.interface";
import { Role } from "../user/user.interface";
import { User } from "../user/user.model";
import { Wallet } from "../wallet/wallet.model";





const addMoney = async(payload : Partial<ITransaction>)=>{
  const { toUserId, amount } = payload;

  const user = await User.findById(toUserId);
  if(!user){
    throw new Error("Reciver not found")
  }
  if(user.role !== Role.USER){
    throw new Error("You are not authorized. only can user add money")
  }
  
  const wallet = await Wallet.findById(user?.wallet)
  if(!wallet){
    throw new Error("Wallet Not found")
  }

  //add money 
  await wallet.addAmount(amount as number)
  //make a transation history
 const tanx = await makeTransationHistory(payload)
return tanx;
}
//send money
const sendMoney = async (payload:Partial<ITransaction>) => {
   const { toUserId,fromUserId, amount } = payload;

  const receiver = await User.findById(toUserId);
  if(!receiver){
    throw new Error("Reciver not found")
  }
  const sender = await User.findById(fromUserId);
  if(!sender){
    throw new Error("Sender not found")
  }

//check authorized
if(sender._id === receiver._id){
  throw new Error("You are not authorized to perform this transaction. Because sender and receiver same");
}
const isAgentToUser = sender.role === "AGENT" && receiver.role === "USER"
const isUserToUser = sender.role === "USER" && receiver.role === "USER"
if(!isAgentToUser && !isUserToUser){
  throw new Error("You are not authorized to perform this transaction.");
}
  //find senderWallet
  const senderWallet = await Wallet.findById(sender?.wallet)
  if(!senderWallet){
    throw new Error("Sender Wallet Not found")
  }
  //find receiverWallet
  const receiverWallet = await Wallet.findById(receiver?.wallet)
  if(!receiverWallet){
    throw new Error("Reciver Wallet Not found")
  }


 //subtract money
  await senderWallet.subtractAmount(amount as number)
  //add money 
  await receiverWallet.addAmount(amount as number)
 
  //make a transation history
  const tanx = await makeTransationHistory(payload)
return tanx;
};

//withdrawMoney like cashout
const withdrawMoney = async (payload:Partial<ITransaction>) => {
   const { toUserId,fromUserId, amount } = payload;

  const receiver = await User.findById(toUserId);
  if(!receiver){
    throw new Error("Reciver not found")
  }
  const sender = await User.findById(fromUserId);
  if(!sender){
    throw new Error("Sender not found")
  }

//check authorized
if(sender._id === receiver._id){
  throw new Error("You are not authorized to perform this transaction. Because sender and receiver same");
}
const isAgentToUser = sender.role === "USER" && receiver.role === "AGENT"
if(!isAgentToUser){
  throw new Error("You are not authorized to perform this transaction. only cash out with agent");
}
  //find senderWallet
  const senderWallet = await Wallet.findById(sender?.wallet)
  if(!senderWallet){
    throw new Error("Sender Wallet Not found")
  }
  //find receiverWallet
  const receiverWallet = await Wallet.findById(receiver?.wallet)
  if(!receiverWallet){
    throw new Error("Reciver Wallet Not found")
  }
//subtract money
  await senderWallet.subtractAmount(amount as number)
  //add money 
  await receiverWallet.addAmount(amount as number)
  
  //make a transation history
 const tanx = await makeTransationHistory(payload)
return tanx;
};



const getAllWallets = async () => {
  const wallets = await User.find().populate("wallet","balance lastUpdated");
  return wallets
};

const getOneWallet = async (userId :string) => {
 
  const wallet = await User.findById({ _id:userId }).populate("wallet","balance lastUpdated");

  if (!wallet) {
    throw new Error("Wallet not found")
  }

  return wallet
}




export const transactionService ={
  addMoney,
  withdrawMoney,
  sendMoney,
  getAllWallets,
  getOneWallet

}
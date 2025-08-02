import { User } from "../user/user.model";
import { Wallet } from "../wallet/wallet.model";
import { Transaction } from "./transaction.model";
import { ITransaction } from "./transation.interface";




const addMoney = async(payload : Partial<ITransaction>)=>{
  const { toUserId, amount,method } = payload;

  const user = await User.findById(toUserId);

  const wallet = await Wallet.findById(user?.wallet)
  
if (wallet) {
  wallet.balance += Number(amount);
  await wallet.save(); // Don't forget to save the updated wallet
}

  const trx = await Transaction.create({
    trxID: `TRX-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    amount,
    type: "TOP-UP",
    method: method || "BANK",
    toUserId,
  });

 return trx
}



export const transactionService ={
  addMoney,
}
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


const withdrawMoney = async (payload:Partial<ITransaction>) => {
  
};
const sendMoney = async (payload:Partial<ITransaction>) => {
  
};
const transactionsHistory = async () => {
  
};


const getAllTransactionsHistory = async () => {
  const transactions = await Transaction.find()
  .populate("fromUserId","name phone nidNumber role")
  .populate("toUserId","name phone nidNumber role");

  return transactions
};

export const transactionService ={
  addMoney,
  withdrawMoney,
  sendMoney,
  transactionsHistory,
  getAllTransactionsHistory
}
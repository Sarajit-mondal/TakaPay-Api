import { Transaction } from "../modules/transaction/transaction.model";
import { ITransaction } from "../modules/transaction/transation.interface";
import { User } from "../modules/user/user.model";


export const makeTransationHistory = async(payload: Partial<ITransaction>) => {
  const { method, ...rest } = payload;
  //  amount,
  //  type: "TOP-UP",
  //  method: method || "BANK",
  //  toUserId,


  const trx = await Transaction.create({
    trxID: `TRX-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    method: method || "BKASH",
    ...rest
    
  });

  return trx
}

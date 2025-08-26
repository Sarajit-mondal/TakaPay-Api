import { Types } from "mongoose";

export enum TransactionType {
  TOPUP = "TOP-UP",
  WITHDRAW = "WITHDRAW",
  TRANSFER = "TRANSFER",
}
export enum  transationMethod {
  BECASH = "BKASH",
  BANK = "BANK",
  CARD = "CARD"
}

export interface ITransaction extends Document {
  fromUserId?: Types.ObjectId // The sender's user ID
  toUserId: Types.ObjectId   // The receiver's user ID
  method: transationMethod;
  type?: TransactionType;
  amount: number;
  trxID?: string,
  timestamp: Date;
}
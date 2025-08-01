import { Types } from "mongoose";

export enum TransactionType {
  TOPUP = "TOPUP",
  WITHDRAW = "WITHDRAW",
  TRANSFER = "TRANSFER",
}

export interface ITransaction extends Document {
  fromUserId: Types.ObjectId // The sender's user ID
toUserId: Types.ObjectId   // The receiver's user ID

  type: TransactionType;
  amount: number;
  timestamp: Date;
}
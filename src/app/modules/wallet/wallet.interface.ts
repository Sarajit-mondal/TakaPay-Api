import { Types } from "mongoose";

export interface IWallet {
  userId: Types.ObjectId; // reference to User model
  balance: number;
  lastUpdated: Date;
}

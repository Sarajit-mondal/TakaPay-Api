import { Types } from "mongoose";

export interface IWallet {
  userId: Types.ObjectId; // reference to User model
  balance: number;
  lastUpdated: Date;

  // instance methods
  addAmount(amount: number): Promise<IWallet>;
  subtractAmount(amount: number): Promise<IWallet>;

}

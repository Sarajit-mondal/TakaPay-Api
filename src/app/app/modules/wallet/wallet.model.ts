import mongoose, { Schema, Types } from "mongoose";
import { IWallet } from "./wallet.interface";


const walletSchema = new Schema<IWallet>(
  {
    userId: {
      type:Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    balance: {
      type: Number,
      default: 50, // starting balance
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



// add amount
walletSchema.methods.addAmount = async function (amount: number): Promise<IWallet> {
  this.balance += amount;
  this.lastUpdated = new Date();
  return await this.save()
};

//subtract amount 
walletSchema.methods.subtractAmount = async function (amount: number): Promise<IWallet>{
  if(this.balance < amount ){
    throw new Error("Insufficient balance")
  }
  this.balance -= amount;
  this.lastUpdated = new Date();
  return await this.save();
}




export const Wallet = mongoose.model<IWallet>("Wallet", walletSchema);
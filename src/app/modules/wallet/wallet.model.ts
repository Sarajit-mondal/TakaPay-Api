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





export const Wallet = mongoose.model<IWallet>("Wallet", walletSchema);
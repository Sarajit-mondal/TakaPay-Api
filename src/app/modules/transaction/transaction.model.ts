
import { Schema, model, Types } from 'mongoose';
import { TransactionType } from './transation.interface';

const transactionSchema = new Schema({
  fromUserId: { type: Types.ObjectId, ref: 'User', required: true },
  toUserId: { type: Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum:Object.values(TransactionType), required: true },
  timestamp: { type: Date, default: Date.now }
});

export const Transaction = model('Transaction', transactionSchema);


import { Schema, model, Types } from 'mongoose';
import { TransactionType, transationMethod } from './transation.interface';

const transactionSchema = new Schema({
  fromUserId: { type: Types.ObjectId, ref: 'User'},
  toUserId: { type: Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  trxID: { type: String,  unique: true },
  type: { type: String, enum:Object.values(TransactionType)},
 method: { type: String, enum:Object.values(transationMethod), default: transationMethod.BECASH },
  timestamp: { type: Date, default: Date.now }
});


export const Transaction = model('Transaction', transactionSchema);

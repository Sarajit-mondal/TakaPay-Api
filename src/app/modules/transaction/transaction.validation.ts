import z from "zod";

export const TopUPTransactionSchema = z.object({
 fromUserId: z.string().min(1, "Sender ID is required").optional(),
  toUserId: z.string().min(1, "Receiver ID is required"),
  amount: z.number().positive("Amount must be a positive number"),
}).refine((data) => data.fromUserId !== data.toUserId, {
  message: "Sender and receiver cannot be the same user",
  path: ["toUserId"]
});




export const transactionSchema = z.object({
 fromUserId: z.string().min(1, "Sender ID is required"),
  toUserId: z.string().min(1, "Receiver ID is required"),
  amount: z.number().positive("Amount must be a positive number"),
}).refine((data) => data.fromUserId !== data.toUserId, {
  message: "Sender and receiver cannot be the same user",
  path: ["toUserId"]
});

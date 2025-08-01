
import {z} from 'zod'

export const userZodSchema = z.object({
 name : z.
        string({ message: "Name must be string" })
        .min(2, { message: "Name must be at least 2 characters long." })
        .max(50, { message: "Name cannot exceed 50 characters." }),
 phone: z.
        string({ message: "Phone Number must be string" })
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),
  password: z.string().length(5,{message:"Must be exactly 5 characters long" }),

  nidNumber: z.string()
             .min(10, { message: 'NID must be at least 10 digits' })
             .max(16, { message: 'NID must be at most 16 digits' }),

})

import {z} from 'zod'
import { agentStatus, Role, UserIsActive } from './user.interface'

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
  password: z
    .string()
    .regex(/^\d{5}$/, { message: "Password must be exactly 5 digits" }),

nidNumber: z
  .string()
  .regex(/^\d{10,16}$/, { message: "NID must be between 10 and 16 digits" })


})
export const userUpdateZodSchema = z.object({
 status: z.nativeEnum(agentStatus).optional(), 
 isActive: z.nativeEnum(UserIsActive).optional(),
})
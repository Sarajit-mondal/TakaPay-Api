import AppError from "../../errorHelpers/AppEror";
import { IUser } from "./user.interface"
import { User } from "./user.model";
import httpStatus from "http-status-codes";
import bcryptjs from "bcryptjs";
import { envVars } from "../../config/env";

const createUser =async(payload : Partial<IUser>)=>{
  const {phone,password,...rest} = payload;
  const isExist = await User.findOne({phone:phone})
  if(isExist){
    throw new AppError(httpStatus.BAD_REQUEST,"User Alredy Exist ")
  }
  const hashedPassword = await bcryptjs.hash(password as string,Number(envVars.BCRYPT_SALT_ROUND))
  
  const user = await User.create({
    phone,
    password : hashedPassword,
    ...rest
  })

  return user;
}




export const userService = {
    createUser
}
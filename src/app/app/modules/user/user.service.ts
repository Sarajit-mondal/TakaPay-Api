import AppError from "../../errorHelpers/AppEror";
import { IUser, Role } from "./user.interface"
import { User } from "./user.model";
import httpStatus from "http-status-codes";
import bcryptjs from "bcryptjs";
import { envVars } from "../../config/env";
import { Wallet } from "../wallet/wallet.model";

const createUser =async(payload : Partial<IUser>)=>{
  const {phone,password:pass,...rest} = payload;
  const isExist = await User.findOne({phone:phone})
  if(isExist){
    throw new AppError(httpStatus.BAD_REQUEST,"User Alredy Exist ")
  }
  const hashedPassword = await bcryptjs.hash(String(pass),Number(envVars.BCRYPT_SALT_ROUND))
  console.log(hashedPassword)
  const user = await User.create({
    phone,
    password : hashedPassword,
    ...rest
  })

  // create wallet and set uer id
  const wallet = await Wallet.create({
    userId : user._id,

  })

  // set user wallet id 
  user.wallet = wallet._id
  await user.save()

  //send user data without password
  const {password,...userWithOutPassword} = user.toObject()

  return {userWithOutPassword};
}



export const userService = {
    createUser
}
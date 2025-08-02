

import { generateToken, verifyToken } from "./jwt";
import AppError from "../errorHelpers/AppEror";
import httpstatus from 'http-status-codes'
import { IUser, UserIsActive } from "../modules/user/user.interface";
import { envVars } from "../config/env";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/user/user.model";



export const createUserTokens = (user:Partial<IUser>)=>{
const jwtPayload = {
    userId : user._id,
     phone : user.phone,
     role: user.role
}


const accessToken = generateToken(jwtPayload,envVars.JWT_ACCESS_SECRET,envVars.JWT_ACCESS_EXPIRES)
const refreshToken = generateToken(jwtPayload,envVars.JWT_REFRESH_SECRET,envVars.JWT_REFRESH_EXPIRES)

return {
    accessToken,
    refreshToken
}

}
export const createNewAccessTokenWithRefreshToken = async (refreshToken: string) => {

    const verifiedRefreshToken = verifyToken(refreshToken, envVars.JWT_REFRESH_SECRET) as JwtPayload


    const isUserExist = await User.findOne({ email: verifiedRefreshToken.email })

    if (!isUserExist) {
        throw new AppError(httpstatus.BAD_REQUEST, "User does not exist")
    }
    if (isUserExist.isActive === UserIsActive.BLOCKED) {
        throw new AppError(httpstatus.BAD_REQUEST, `User is ${isUserExist.isActive}`)
    }
    

    const jwtPayload = {
        userId: isUserExist._id,
        email: isUserExist.phone,
        role: isUserExist.role
    }
    const accessToken = generateToken(jwtPayload, envVars.JWT_ACCESS_SECRET, envVars.JWT_ACCESS_EXPIRES)

    return accessToken
}
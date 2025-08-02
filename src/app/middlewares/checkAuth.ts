import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppEror";
import { verifyToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status-codes"
import { envVars } from "../config/env";
import { User } from "../modules/user/user.model";
import { agentStatus, UserIsActive } from "../modules/user/user.interface";


export const checkAuth = (...authRoles : string[]) => async(req:Request,res:Response,next:NextFunction)=>{
 try {
    const accessToken = req.headers.authorization;
    if(!accessToken){
        throw new AppError(403,"No Token Recieved")
    }

const verifiedToken = verifyToken(accessToken,envVars.JWT_ACCESS_SECRET) as JwtPayload

const isUserExist = await User.findOne({email: verifiedToken.email})

if(!isUserExist){
    throw new AppError (httpStatus.BAD_REQUEST,"User does not exist")
}

if(isUserExist.isActive === UserIsActive.BLOCKED ){
    throw new AppError(httpStatus.BAD_REQUEST,`User is ${isUserExist.isActive}`)
}
if(isUserExist.status ===  agentStatus.SUSPEND){
    throw new AppError(httpStatus.BAD_REQUEST,"Agent is SUSPEND")
}

if(!authRoles.includes(verifiedToken.role)){
    throw new AppError(403,"You are not permitted!!")
}

req.user = verifiedToken
next()

 } catch (error) {
    next(error)
 }
}
import { Document } from "mongoose";


export enum Role {
    ADMIN = "ADMIN",
    AGENT = "AGENT",
    USER = "USER"
}

export enum isActive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export interface IUser extends Document {
    name : string;
    phone:string;
    password:string;
    role : string;
    isVerified: isActive;
    nidNumber?:string;
    photoUrl?:string;
    wallet : number;
    location?:string;
    commissionRate?:number;
    isActive:Boolean;
    
}
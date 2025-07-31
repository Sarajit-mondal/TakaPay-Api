import { Document } from "mongoose";


export enum Role {
    ADMIN = "ADMIN",
    AGENT = "AGENT",
    USER = "USER"
}

export enum UserIsActive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export interface IUser extends Document {
    name : string;
    phone:string;
    password:string;
    role : string;
    isVerified: Boolean;
    nidNumber?:string;
    photoUrl?:string;
    wallet : number;
    location?:string;
    commissionRate?:number;
    isActive?:UserIsActive;
    
}
import { Document } from "mongoose";


export enum Role {
    ADMIN = "ADMIN",
    AGENT = "AGENT",
    USER = "USER"
}

export enum UserIsActive {
    BLOCKED = "BLOCKED",
    UNBLOCKED = "UNBLOCKED"
}
export enum agentStatus {
 APPROVE = "APPROVE",
 SUSPEND = "SUSPEND"
}

export interface IUser extends Document {
    name : string;
    phone:string;
    password:string;
    nidNumber:number;
    role: Role;
    photoUrl?:string;
    wallet?: number;
    location?:string;
    commissionRate?:number;
    isVerified?: Boolean;
    isActive?:UserIsActive;
    status? : agentStatus;
}
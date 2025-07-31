import mongoose, { Schema } from "mongoose";
import { IUser, Role, UserIsActive } from "./user.interface";




const userSchema = new Schema<IUser>({
    name : {type:String,required:true},
    phone : {type:String,required:true,unique:true},
    password: {type:String,required:true},
    role:{
        type:String,
        enum: Object.values(Role),
        default:Role.USER
    },
    isVerified:{type:Boolean,default:false},
    nidNumber:{type:String},
    photoUrl:{type:String},
    wallet : {type:Number,default:50},
    location: {type:String},
    commissionRate:{type:String},
    isActive:{
        type:Boolean,
        enum: Object.values(UserIsActive),
        default:true
    },
},{
    timestamps:true,
    versionKey:false
}
)


export const UserModel = mongoose.model<IUser>("User",userSchema)
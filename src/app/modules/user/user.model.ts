import mongoose, { Schema } from "mongoose";
import { agentStatus, IUser, Role, UserIsActive } from "./user.interface";




const userSchema = new Schema<IUser>({
    name : {type:String,required:true},
    phone : {type:String,required:true,unique:true},
    password: {type:String,required:true},
    nidNumber:{type:String,required:true},
    role:{
        type:String,
        enum: Object.values(Role),
        default:Role.USER
    },
    isVerified:{type:Boolean,default:false},
    photoUrl:{type:String},
     wallet: {
      type: Schema.Types.ObjectId,
      ref: "Wallet",
    },
    location: {type:String},
    commissionRate:{type:String},
    isActive:{
        type:String,
        enum: Object.values(UserIsActive),
        default: UserIsActive.UNBLOCKED
    },
    status : {
        type:String,
        enum : Object.values(agentStatus),
    }
},{
    timestamps:true,
    versionKey:false
}
)


export const User = mongoose.model<IUser>("User",userSchema)
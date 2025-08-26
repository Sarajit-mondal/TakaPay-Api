import { agentStatus, IUser, Role, UserIsActive } from "../user/user.interface"
import { User } from "../user/user.model"



/// BLOCK AND UNBLOCK USER 
const userBlockAndUnblock = async(payload:Partial<IUser>,userId : string)=>{
 const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  if (user.role !== Role.USER) {
    throw new Error("You are not an User");
  }

  // Validate and assign status
  if (
    payload.isActive &&
    payload.isActive !== undefined &&
    Object.values(UserIsActive).includes(payload.isActive)
  ) {
    user.isActive = payload.isActive;
  } else {
    throw new Error(`Invalid status value. Allowed: ${Object.values(agentStatus).join(", ")}`);
  }

  const updateUser = await user.save();
  return updateUser;
}



/// Suspand and Approve
const agentSuspandAndApprove = async(payload:Partial<IUser>,agentId : string)=>{
const agent =await User.findById(agentId)
if(!agent){
  throw new Error("Agent not found")
}
if(agent.role !== Role.AGENT){
  throw new Error("You are not Agent")
}


 agent.status = payload.status; // assign the correct type
 const updateAgetnt = await agent.save()
 return updateAgetnt
}


export const userService = {
    userBlockAndUnblock,
    agentSuspandAndApprove

}
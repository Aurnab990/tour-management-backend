import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async(playload: Partial<IUser>) =>{
    const {name, email} = playload;
    const user = await User.create({
        name,
        email
    });
    return user;
}
const getAllUsers = async() =>{
        const users = await User.find({});
        const totalUsers = await User.countDocuments();
        return {
            data: users,
            meta: {
                totalUsers
            }
        };  
    }


export const userService = {
    createUser,
    getAllUsers,
}
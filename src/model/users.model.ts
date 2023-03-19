import { Schema, model} from "mongoose";
import mongoose from "mongoose";

export interface IUser {
    firstName?:string,
    lastName?:string,
    address?:string,
    email:string,
    password: string,
    token?:string,
}

export const userSchema  = new Schema<IUser>({
    firstName:{type:String, required: false},
    lastName:{type:String, required: false},
    address:{type:String, required:false},
    email:{type:String, required: false},
    password: {type:String, required: false},
    token: {type:String, required: false},
});

export const userModel = mongoose.model<IUser>('users', userSchema)
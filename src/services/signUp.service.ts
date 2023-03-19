import { userModel } from "../model/users.model";
import express, { Request, Response } from "express";


interface IUser {
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    password: string,
    token?: string, 
}

export const addUserService = async(dataOfUser:IUser) => {
    console.log("users services connected");
    try{
        const oldUser = await userModel.findOne({email: dataOfUser.email});
        
        return oldUser
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

export const getUsersService = async () => {
    console.log("get users services connected");
    try {
    const users = await userModel.find();
    return users
    } 
    catch (err) {
    console.log(err);
    throw err;
    }
};
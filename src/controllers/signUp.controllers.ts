import express, { Request, Response } from "express";
import { userModel } from "../model/users.model";
import {addUserService, getUsersService} from '../services/signUp.service';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const addUserController = async ( req: Request, res: Response) => {
    console.log("users controller connected");
    const dataOfUser = req.body;
        try {
            const _usersCheck = await addUserService(dataOfUser);
            if (_usersCheck) {
                return "User Already Exist. Please Login";
            }
            else {
                //Encrypt user password
                const encryptedPassword = await bcrypt.hash( dataOfUser.password, 10);
                // Create user in database
                const newUseDocument = {
                    firstName:dataOfUser.firstName,
                    lastName:dataOfUser.lastName,
                    address:dataOfUser.address,
                    email:dataOfUser.email.toLowerCase(),
                    password: encryptedPassword,
                }
                const _user = new userModel(newUseDocument);
                // Create token
                const token = jwt.sign(
                    {  user_id: _user._id },
                    process.env.JWT_SECRET!, 
                    {expiresIn: "2h",}
                );
                // save user token
                _user.token = token;

                await _user.save();
        return res
        .status(200)
        .json(_user)
        };
        
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

export const getAllUsersController = async (req: Request, res: Response) => {
    console.log("get all user controller");
    
    try {
      const _users = await getUsersService();
      return res
      .status(200)
      .json(_users)
    } catch (err) {
      console.log(err);
      throw err;
    }
};
   
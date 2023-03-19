import express, { Request, Response } from "express";
import {signInService} from '../services/signIn.service';
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

export const signInController  = async ( req: Request, res: Response) => {
    console.log("sign In controller connected");
    try {
        const UserLoginInfo = req.body;
         // Validate user input
        if (!(UserLoginInfo.email && UserLoginInfo.password)) {
            res.status(400).send("All input is required");
        }
        const _user = await signInService(UserLoginInfo);
        
        if (_user && (await bcrypt.compare(UserLoginInfo.password, _user.password))) {
            // Create token
            dotenv.config();
            const userToken = process.env.JWT_SECRET || ''
            const token = jwt.sign(
              { user_id: _user._id},
              userToken,
              {
                expiresIn: "2h",
              }
            );
            // save user token
            _user.token = token;

        return res
        .status(200)
        .json(_user)
    }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

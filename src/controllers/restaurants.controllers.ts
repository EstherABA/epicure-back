import express, { Request, Response } from "express";
import {getRestaurants} from '../services/restaurants.service';


export const getAllRestaurants = async (req: Request, res: Response) => {
    
    try {
        const _restaurants = await getRestaurants();
        return res
        .status(200)
        .json(_restaurants)
    } catch (err) {
        console.log(err);
        throw err;
    }
}
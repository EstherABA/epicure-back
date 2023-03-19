import express, { Request, Response } from "express";
import {getDishes} from '../services/dishes.services';


export const getAllDishes = async (req: Request, res: Response) => {
    console.log("Dishes controller connected");
    
    try {
        const _dishes = await getDishes();
        return res
        .status(200)
        .json(_dishes)
    } catch (err) {
        console.log(err);
        throw err;
    }
}
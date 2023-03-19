import { chefModel } from "../model/chefs.model";
import express, { Request, Response } from "express";

export const getChefs = async() => {
  try {
    const chefs = await chefModel.find();
    return chefs
  }
  catch(err){
    console.log(err);
    throw err;
  }
};

export const deleteChefService = async(chefId:number) => {
  console.log(" chefsD services connected");
  try {
    const chefClickedObject = await chefModel.findOneAndDelete({id:chefId});
    console.log(chefClickedObject, "chefs OBJ");
    
    return chefClickedObject
  }
  catch(err){
    console.log(err);
    throw err;
  }

}
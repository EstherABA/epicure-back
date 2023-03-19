import { Schema, model} from "mongoose";
import mongoose from "mongoose";

export interface IChef {
    id:number,
    name:string,
    portrait: string,
    restaurants: Array<string>,
    isChefOfTheWeek:boolean, 
    description: string,
    isNewChef: boolean,
    viewCount: number,
    mostViewed: boolean,
}

export const chefSchema  = new Schema<IChef>({
    id:{type:Number, required: true},
    name:{type:String, required: true},
    portrait: {type:String, required: false},
    restaurants:{Array, required: false},
    isChefOfTheWeek:{type:Boolean, required: false}, 
    description: {type:String, required: true},
    isNewChef: {type:Boolean, required: false},
    viewCount: {type:Number, required: false},
    mostViewed: {type:Boolean, required: false},
});

export const chefModel = mongoose.model<IChef>('chefs', chefSchema)

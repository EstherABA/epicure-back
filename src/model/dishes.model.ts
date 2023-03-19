import { Schema, model} from "mongoose";
import mongoose from "mongoose";

export interface IDish {
    id:number,
    name:string,
    image:string,
    price:number,
    chefId:string,
    restaurant: string,
    ingredients: string,
    isSignatureDish:boolean,
    properties:Array<string>,
    optionalSides:Array<string>,
    optionalChanges:Array<string>,
}

export const dishSchema  = new Schema<IDish>({
    id:{type:Number, required: true},
    name:{type:String, required: true},
    image: {type:String, required: false},
    price : {type:Number, required: true},
    chefId: {type:String, required: true},
    restaurant:{type:String, required: true},
    ingredients:{type:String, required: true},
    isSignatureDish:{type:Boolean, required: false}, 
    properties: {Array, required: false},
    optionalSides: {Array, required: false},
    optionalChanges: {Array, required: false},
});

export const dishModel = mongoose.model<IDish>('dishes', dishSchema)
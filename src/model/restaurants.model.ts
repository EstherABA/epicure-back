import { Schema, model} from "mongoose";
import mongoose from "mongoose";

export interface IRestaurant {
    id:number,
    name:string,
    image: string,
    imageHero: string,
    chefName: string,
    address: string,
    rating: number,
    isPopular:boolean, 
    isNew: boolean,
    mostPopular: boolean,
    openHour: number,
    closeHour: number,
    dishes: Array<string>,
}

export const restaurantSchema  = new Schema<IRestaurant>({
    id:{type:Number, required: true},
    name:{type:String, required: true},
    image: {type:String, required: false},
    imageHero: {type:String, required: false},
    chefName: {type:String, required: true},
    address: {type:String, required: false},
    rating:{type:Number, required: true},
    isPopular:{type:Boolean, required: false}, 
    isNew: {type:Boolean, required: false},
    mostPopular:{type:Boolean, required: false}, 
    openHour: {type:Number, required: true},
    closeHour: {type:Number, required: true},
    dishes:{Array, required: false},
});

export const restaurantModel = mongoose.model<IRestaurant>('restaurants', restaurantSchema)
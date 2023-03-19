import { restaurantModel } from "../model/restaurants.model";

export const getRestaurants = async() => {
    try {
      const restaurants = await restaurantModel.find();
      return restaurants
    }
    catch(err){
      console.log(err);
      throw err;
    }
  };
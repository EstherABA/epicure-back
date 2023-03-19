import { dishModel } from "../model/dishes.model";

export const getDishes = async() => {
    console.log("  dishes services connected");
    
    try {
      const dishes = await dishModel.find();
      return dishes
    }
    catch(err){
      console.log(err);
      throw err;
    }
  };
import { connect } from "mongoose";
import dotenv from 'dotenv';

// connection to local mongoDB
dotenv.config();
const uriSecret = process.env.TOKEN_SECRET;
const uri = uriSecret;
const dbName= 'EpicureDB';

export const connectToDB = async () => {
 try {
   await connect(`${uri}${dbName}`);
   console.log('db connected')
 } catch (err) {
   console.log("error connecting to db", err);
 }
};
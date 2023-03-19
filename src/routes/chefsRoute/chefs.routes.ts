import express from "express";
import {getAllChefs, deleteChefController} from '../../controllers/chefs.controllers'

const router = express.Router();

router.get("/chefs", getAllChefs);
router.delete("/chefs/delete" , deleteChefController)


const bodyParser = require("body-parser"); 
router.use(bodyParser.json());


export default router;

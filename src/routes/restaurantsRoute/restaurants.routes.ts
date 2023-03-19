import express from "express";
import {getAllRestaurants} from '../../controllers/restaurants.controllers'

const router = express.Router();

router.get("/restaurants", getAllRestaurants)

const bodyParser = require("body-parser"); 
router.use(bodyParser.json());

export default router;
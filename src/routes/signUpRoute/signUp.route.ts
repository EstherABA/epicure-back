import express from "express";
import {addUserController, getAllUsersController} from '../../controllers/signUp.controllers'

const router = express.Router();

router.get("/", getAllUsersController)
router.post("/register", addUserController)

const bodyParser = require("body-parser"); 
router.use(bodyParser.json());


export default router;
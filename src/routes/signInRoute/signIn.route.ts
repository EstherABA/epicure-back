import express from "express";
import {signInController} from '../../controllers/signIn.controllers';
import bodyParser from "body-parser"; 

const router = express.Router();

router.post("/login",signInController )

router.use(bodyParser.json());


export default router;
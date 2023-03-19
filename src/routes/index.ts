import express from "express";
import chefsRoutes from "./chefsRoute/chefs.routes";
import restaurantsRoutes from "./restaurantsRoute/restaurants.routes";
import dishesRoutes from "./dishesRoute/dishes.routes";
import signUpRoutes from "./signUpRoute/signUp.route";
import signInRoutes from "./signInRoute/signIn.route";


const router = express.Router();

router.use("/api", chefsRoutes);
router.use("/api", restaurantsRoutes);
router.use("/api", dishesRoutes);
router.use("/api/users", signUpRoutes);
router.use("/api/users", signInRoutes);

export default router;

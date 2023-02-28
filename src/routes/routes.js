import { Router } from "express";
import CarController from "../controllers/CarController.js";

const route = Router();

route.get("/cars",CarController.FindAll);

export default route;
import { Router } from "express";
import CarController from "../controllers/CarController.js";

const route = Router();

route.get("/cars",CarController.FindAll);
route.get("/cars/:id",CarController.findId);
route.post("/cars",CarController.create);
route.put("/cars",CarController.update);
route.delete("/cars",CarController.delete);


export default route;
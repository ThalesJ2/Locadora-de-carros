import { Router } from "express";
import CarController from "../controllers/CarController.js";
import ClientController from "../controllers/ClientController.js";

const route = Router();

route.get("/cars",CarController.FindAll);
route.get("/cars/:id",CarController.findId);
route.post("/cars",CarController.create);
route.put("/cars",CarController.update);
route.delete("/cars",CarController.delete);

route.get("/client",ClientController.readAll);
route.get("/client/:id",ClientController.findByID);
route.put("/client",ClientController.update);
route.post("/client",ClientController.create);
route.delete("/client",ClientController.delete);

export default route;
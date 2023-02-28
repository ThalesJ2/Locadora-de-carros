import Car from "../models/Car.js";
class CarController{


    async FindAll(req,res){
  
         let cars = await Car.readAll();

         if(cars.status)
            return res.json(cars.resultQuery);
        else
            return res.sendStatus(404);
     
    }

}

export default new CarController();
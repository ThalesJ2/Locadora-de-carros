import Car from "../models/Car.js";
class CarController{


    async FindAll(req,res){
  
         let cars = await Car.readAll();

         if(cars.resultQuery != 0)
            return res.json(cars.resultQuery);
        else
            return res.sendStatus(404);
     
    }

    async findId(req,res){

        let {id} = req.params;
        let car = await Car.findId(id);
        console.log(typeof(id));

        if(car.resultQuery != 0)
            return res.json(car.resultQuery);
        else
            return res.sendStatus(404);

    }

    async create(req,res){

        let{brand,model,dateregister} = req.body;

        if(brand == "" || brand == undefined)
            return res.sendStatus(400);
        else
        if(model == "" || model == undefined)
            return res.sendStatus(400);
        else
        if(dateregister == "" || dateregister == undefined)
            return res.sendStatus(400);

        let result = await Car.create(brand,model,dateregister);

        if(result.status)
              return res.json({brand,model,dateregister});
        else
            return res.sendStatus(400);
    }

    async delete(req,res){

        let {id} = req.body;


        if(id== undefined || typeof(id) != "number")
            return res.sendStatus(400);
        
        
        let result = await Car.delete(id);

        if(result.resultQuery != 0)
            return res.sendStatus(200);
        else
            return res.sendStatus(404);

    }

    async update(req,res){

        let {id,brand,model} = req.body;

        if(brand == undefined || brand == "")
            return res.sendStatus(400);
        else
        if(model == undefined || model == "")
            return res.sendStatus(400);
        else
        if(id== undefined || typeof(id) != "number")
            return res.sendStatus(400);
        
        let result = await Car.update(id,brand,model);

        if(result.status)
            return res.json({id,brand,model});
        else
            return res.sendStatus(404);
    }

}

export default new CarController();
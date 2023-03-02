import Client from "../models/Client.js";
import Car from "../models/Car.js";
class ClientController {


    async readAll(req,res){

        let result = await Client.readAll();

        if(result.status)
            return res.json(result.resultQuery);
        else
            return res.sendStatus(404);

    }

    async create(req,res){

        let {name,cpf,carID,birthday} = req.body;

        if(name == undefined || name == "")
            return res.sendStatus(400);
        else
        if(cpf == undefined || cpf == "")
            return res.sendStatus(400);
        else
        if(birthday == undefined || birthday =="")
            return res.sendStatus(400);
        else
        if(carID == undefined || typeof(carID) != "number")
            return res.sendStatus(400);

        let findCarID = await Car.findId(carID);

        if(findCarID.status)
        {
            let result = await Client.create(name,cpf,carID,birthday);
            if(result.status)     
                return res.json({name,cpf,carID,birthday});
            else
                return res.sendStatus(400);
        }
            
        else
            return res.sendStatus(404);
    }

   async delete(req,res){

        let {id} = req.body;
        
        if(id == undefined || typeof(id) != "number")
             return res.sendStatus(400);
        
        let result = await Client.delete(id);
        
        if(result.resultQuery != 0)
            return res.sendStatus(200);
        else
            return res.sendStatus(404);

   }

   async findByID(req,res){

        let {id} = req.params;
        
        if(id == undefined)
             return res.sendStatus(400);

        let result = await Client.findByID(id);

        if(result.resultQuery != 0)
            return res.json(result.resultQuery);
        else
            return res.sendStatus(404);

   }

   async update(req,res){

        let {id,name,cpf,carID,birthday} = req.body;

        if(name == undefined || name == "")
            return res.sendStatus(400);
        else
        if(cpf == undefined || cpf == "")
            return res.sendStatus(400);
        else
        if(birthday == undefined || birthday == "")
            return res.sendStatus(400);
        else
        if(carID == undefined || typeof(carID) !="number")
            return res.sendStatus(400);
        else
        if(id == undefined || typeof(id) != "number")
            return res.sendStatus(400);

        let findCar =  await Car.findId(carID);

        if(findCar.resultQuery != 0){

            let updateClient = await Client.update(id,name,cpf,carID,birthday);

            if(updateClient.status)
                return res.json({id,name,cpf,carID,birthday});
            else
                return res.sendStatus(500);
        }
        else
            return res.sendStatus(404);
   }

}

export default new ClientController();
import connection from "../database/connection.js";

class Client {

    async readAll(){

        try {

            let resultQuery = await connection.select("id","name","cpf","carID","birthday").from("client");
            return {status:true,resultQuery};
            
        } catch (error) {

            console.log(error);
            return {status:false};
        }
    }

    async create(name,cpf,carID,birthday){

        try {
            let resultQuery = await connection.insert({name,cpf,carID,birthday}).from("client");
            return {status:true};
            
        } catch (error) {
            console.log(error);
            return {status:false};
        }

    }

    async delete(id){

        try {

            let resultQuery = await connection("client").where({id,}).del();
            return {status:true,resultQuery};
            
        } catch (error) {
            console.log(error);
            return {status:false};
        }
    }

    async findByID(id){

        try {

            let resultQuery = await connection.select("id","name","cpf","carID","birthday")
                                     .where({id,}).from("client");

            return {status:true,resultQuery};
            
        } catch (error) {

            console.log(error);
            return {status:false}
        }
    }

    async update(id,name,cpf,carID,birthday){

        try {

            let resultQuery =  await connection("client").where({id,}).update({name,cpf,carID,birthday});
            return {status:true,resultQuery};
            
        } catch (error) {
            console.log(error);
            return {status:false};
        }

    }
}

export default new Client();
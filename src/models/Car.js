import connection from "../database/connection.js";
class Car{

    async readAll(){

        try {
            let resultQuery = await connection.select("id","brand","model","dateregister").from("car");
            return {status:true,resultQuery};
        } catch (error) {
            console.log(error)
            return{status:false};
        }

    }

    async findId(id){

        try {

            let resultQuery =  await connection.
            select("id","brand","model","dateregister")
            .from("car").where({id,});

            return {status:true,resultQuery};
                                
        } catch (error) { console.log(error);
            return {status:false}
        }

    }

    async create(brand,model,dateregister){
        try {
            let resultQuery = await connection.insert({brand,model,dateregister}).table("car");
            return {status:true}
        } catch (error) {
             console.log(error);
            return {status:false}
        }

    }

    async delete(id){
        
        try {
            
            let resultQuery = await connection("car").where({id,}).del();
            return {status:true,resultQuery};

        } catch (error) {

        console.log(error);
        return {status:false};
        }

    }

    async update(id,brand,model){
        try {
            let resultQuery = await connection("car").where({id,}).update({brand,model,});
            return {status:true};
        } catch (error) {
            console.log(error);
            return {status:false};
        }

    }
}

export default new Car();
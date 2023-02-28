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
}

export default new Car();
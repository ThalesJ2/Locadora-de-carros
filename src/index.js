import express from "express";
import bodyParser from "body-parser";
import connection from "./database/connection.js";
import dotenv from "dotenv";
import route from "./routes/routes.js";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(route);

app.listen(process.env.db_port,()=>{
    console.log("App rodando");
});
import express from "express";
import bodyParser from "body-parser";
import connection from "./database/connection.js";
import route from "./routes/routes.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(route);

app.listen(8080,()=>{
    console.log("App rodando");
});
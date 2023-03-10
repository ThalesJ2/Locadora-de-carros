import dotenv from "dotenv";
dotenv.config();
export default {

  development: {
    client: "mysql2",
    connection: {
      database: process.env.db_name,
      user:     process.env.db_user,
      password: process.env.db_password
    },
    seeds:{
        directory:"./src/database/seeds"
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },

};

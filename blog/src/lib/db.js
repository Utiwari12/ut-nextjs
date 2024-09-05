//connection with mongodb

//export const connectionStr = "mongodb+srv://motion:nilam@cluster0.tinio.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"


//connection with mysql
import mysql from "mysql2/promise";


let connection;
export const createConnection = async()=>{
    if(!connection){
        connection = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME
        })
    }

    return connection;
}


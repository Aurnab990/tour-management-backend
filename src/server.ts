import express, { Request, Response } from "express";
import { Server } from "http";
import mongoose from "mongoose";
import { envVars } from "./config/env";


let server: Server;
const app = express();
app.use(express.json());

const db_url = envVars.DB_URL;
const port = envVars.PORT;

const startServer = async () => {
  try {
    await mongoose.connect(db_url);

    console.log("DB connected");

    server = app.listen(port, () => {
      console.log(`Server is connected on PORT ${port}`);
    });
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

app.get('/', async(req: Request, res: Response) => {
    res.status(201).json({
        message: "Welcome to Tour management home-page"
    })
});

process.on("unhandledRejection",(err)=>{
    console.log("Unhandled rejection detected... Server shutting down", err);
    if(server){
        server.close(()=>{
            process.exit(1);
        });
    }
    process.exit(1);
});

process.on("uncaughtException",(err)=>{
    console.log("uncaughtExceptio rejection detected... Server shutting down",err);
    if(server){
        server.close(()=>{
            process.exit(1);
        });
    }
    process.exit(1);
});

process.on("SIGTERM",()=>{
    // console.log("SIGTERM rejection detected... Server shutting down");
    if(server){
        server.close(()=>{
            process.exit(1);
        });
    }
    process.exit(1);
});

// Promise.reject(new Error("I forgot error"));
// throw new Error("Uncauth error");

startServer();

import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url";

// configraton  ---------->
 const __filename=fileURLToPath(import.meta.url)
 const __dirname= path.dirname(__filename);
  dotenv.config();
  const  app=express();
  app.use(express.json())
   app.use(bodyParser.json())
   app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(helmet.crossOriginEmbedderPolicy({policy: "cross-origin"}));
app.use (morgan("common"));
app.use(cors());
app.use("/assets",express.static(path.join(__dirname,"public/assets")));

//file storage-------------> / multer
const storage=multer.diskStorage({
    destination: function(req,file,cd){
        cd(null,"public/assets")
    },
    filename:function(req,file,cd){
        cd(null,file.originalname);
    }
})
const uplode=multer(storage);

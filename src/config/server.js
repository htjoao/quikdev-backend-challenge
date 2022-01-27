require("dotenv").config();

const express = require("express");
const { append } = require("express/lib/response");
const mongoose = require("mongoose");

const routes = require("./routes");
const connectToDatabase = require("./database");

connectToDatabase();


const APP = express();
const port = 3333;
//INFORMANDO AS FORMAS QUE A API DEVE LER
APP.use(express.json());
APP.use(routes); 

APP.listen(3333, () => console.log("servidor rodando"));
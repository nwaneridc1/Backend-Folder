const express = require("express");

const cors = require("cors")
const dotenv =require ("dotenv").config();
const connectDB = require("./config/db");
const ContentRoutes= require("./Routes/Content");
const bodyparser = require("body-parser");
const app = express();
connectDB();

const port=process.env.port;
app.use(cors())
app.use(bodyparser.json());
app.use("/Contents", ContentRoutes);



app.listen(
    port, ()=>console.log(`server running on port ${port} `));
    // app.use(express.json())
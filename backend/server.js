require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");



app.use(cors());

app.use(express.json());

app.use("/users", userRoutes);



mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("INITIATING SERVER...");
            console.log("THIS SERVER WAS CREATED USING EXPRESS");
        });
    }); 
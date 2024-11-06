// require('dotenv').config({path: '.env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    async () => {
      try {
        await mongoose.connect(`${process.env.MONGODB_URI} /${DB_NAME}`);
        app.on("error", () => {
          console.log("ERROR:", error);
          throw error;
        });
      } catch (error) {
        console.log("Error:", error);
      }
    };
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });

//  FIRST APPROACH WHERE WE WRITE THE DATABASE CONNECTION CODE IN THE INDEX FILE ITSELF
/*
import express from "express"
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",() =>{
        console.log("ERROR:", error);
        throw error
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log("ERROR:", error);
    throw error;
  }
})();

*/

import express from "express";
import dotenv from "dotenv";
import mongoose from  "mongoose";
import bookRoute from './route/Book.route.js'

const app = express()

dotenv.config();

const port = process.env.port || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb
try{
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("connected to monogodb")
}
catch (error) {
   console.log("Error: ",error)
}

//defining routes
app.use("/",bookRoute)

//defining routes
app.use("/book",bookRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})





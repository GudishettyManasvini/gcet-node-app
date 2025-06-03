import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userModel from "./models/userModel.js";
import productModel from "./models/productModel.js";

const app = express();
 app.use(cors());
app.use(express.json());

app.listen(8080, () => {
    mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started ");
});



app.post("/register", async(req, res)=>{
    const {name,email,pass} = req.body
    const result = await userModel.insertOne({name: name,email: email, pass: pass});
    return res.json(result);
})

app.post("/login", async(req, res)=>{
    const {email,pass} = req.body
    const result = await userModel.findOne({email, pass});
    if(!result) return res.json({message:"Invalid User or Password"})
    return res.json(result);
})

app.get("/", (req, res) => {
  return res.send("Hello! Good morning :)");
});

app.get("/weather", (req, res) => {
  return res.send("Heyy!! Today's weather is 28 degrees"); 
});

app.get("/name", (req, res) => {
  return res.send("Hello Manasvini!"); 
});

app.get("/products", async (req, res) => {
  try {
    const products = await productModel.find(); 
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching products", error });
  }
});
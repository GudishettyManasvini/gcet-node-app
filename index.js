import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
app.listen(8080, ()=>{
    console.log("Server Started");
});


app.get("/", (req , res) =>{
    return res.send("GOOD Morning");
});

app.get("/greet",(req, res)=>{res.send("Greetings")});
app.get("/name",(req, res) =>{return res.send("Manasvini")});
app.get("/weather",(req, res) =>{return res.send("35 degrees")});
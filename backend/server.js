import express from "express";
import mongoose from "mongoose";
import todoSchema from "./models/todo.model.js"
import env from "dotenv"
import connection from "./connection.js"
import router from "./router.js"
env.config()
const app=express();
app.use(express.static("../frontend"))
app.use(express.json())
app.use("/api",router)

//delete
app.delete("/deletetodo/:_id",async(req,res)=>{
    const{_id}=req.params
    console.log(_id);
    await todoSchema.deleteOne({_id})
    .then(()=>{
        res.status(200).send({msg:"succesfully deleted"})
    })
    .catch((error)=>{
        res.status(500).send(error)
    })
})
//connetc mongodb
connection().then(()=>{
    
    // connect to port
    app.listen(process.env.PORT,()=>{
        console.log("server created");     
    })
})
.catch((error)=>{
    console.log(error);    
})

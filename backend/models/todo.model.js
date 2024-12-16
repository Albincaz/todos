import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    name:{type:String},
    lastName:{type:String},
    phone:{type:String},

})
export default mongoose.model.Todos||mongoose.model("Todo",todoSchema)
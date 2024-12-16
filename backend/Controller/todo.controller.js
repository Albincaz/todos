import todoSchema from "../models/todo.model.js"
export async function addTodos(req,res){
    console.log(req.body);
    const{name,lastName,phone}=req.body;
    //add data to database
    await todoSchema.create({name,lastName,phone}).then(()=>{
        res.status(201).send({msg:"succesfully added"})
    }).catch((error)=>{
        res.status(400).send({error})
    })
}


export async function getTodos(req,res) {
    try {
        const todos=await todoSchema.find();
        res.status(200).send(todos)
    } catch (error) {
        res.status(500).send(error)
    }
}
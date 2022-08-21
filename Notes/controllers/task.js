const Task = require('../models/tasks')
const getAllTasks= async(req,res)=>{
    try {
        const allTasks=await Task.find({});
        res.json({"data":allTasks})
        
    } catch (error) {
        res.status(500).json({"error":error})

    }
    
}
const createTask  = async(req,res) =>{
    try {
            
        const task= await(Task).create(req.body)
        res.json(task)
        
    } catch (error) {
        res.status(500).json({"error":error})
    }

}
 
const getTaskById  = async(req,res)=>{
    try {
        
        const taskDetails=await Task.findOne({_id:req.body._id}).exec();
        if(!taskDetails){
            res.json({"message":"Matching ID not found"})   
        }
        else{
            res.json({"id":taskDetails})
        }
        
        
    } catch (error) {
        
        res.status(500).json(error)
    }
}

const updateTask = async(req,res)=>{
    try {
        
        const id= req.params.id
        const data= req.body

        const update= await Task.updateOne({_id:req.params.id},req.body)
        
        res.json({id,data})
        // res.json({id:id,data:data})
    } catch (error) {
        res.json({error})
    }
}

module.exports={
    getAllTasks,
    createTask,
    getTaskById,
    updateTask
}
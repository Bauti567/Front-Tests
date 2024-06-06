import Tasks from "../models/taskModel"


export const getTasks = async (req,res)=>{
    const tasks = await Tasks.find()
    res.json(tasks)
}

export const createTask = async (req,res)=>{
    const { title, description, date } = req.body
    const newTask = new Tasks({
        title,
        description,
        date
    })
    const savedTask = await newTask.save()
    res.json('Tarea guardada')
}

export const getTask = async (req,res)=>{
    const task = await Tasks.findById(req.params.id)
    if (!task) return res.status(404).json({
        message: "Not found bb"
    })
    res.json(task)

}


export const deleteTask = async (req,res)=>{
    const task = await Tasks.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({
        message: "tarea no encontrada puñeta"
    })
    res.json(task)

    
}   

export const updateTask = async (req,res)=>{
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body)
    if (!task) return res.status(404).json({
        message: "Tarea no encontrada"
    })
    res.json(task)

}
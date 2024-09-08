import mongoose from 'mongoose'

export const ConnectDb = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://JuanBautista:RvYHr6R8OQwy5Mk0@cluster0.tuza9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Db is connected')
    } catch (error) {
        console.log(error)
    }
}
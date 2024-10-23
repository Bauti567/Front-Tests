import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://JuanBautista:JuanBautista1972@atlascluster.lazttss.mongodb.net/Cats?retryWrites=true&w=majority&appName=AtlasCluster')
        console.log('Db is connected')
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDB();
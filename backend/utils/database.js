import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config({
    path:"../.env"
})
const dbcon = () =>{
    mongoose.connect(process.env.mongo_uri).then(() =>{
        console.log("connected to mongobd")
    }).catch((error)=>{
        console.log(error);
    })
}
export default dbcon;
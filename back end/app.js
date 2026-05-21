const express = require ("express")
const app = express()

app.use(express.json())

const mongoose = require("mongoose")

const  DbConection = async ()=> {
    
{
try{
     await mongoose.connect(process.env.DB_URL)

    console.log("server connect")

}
  
    catch(error){
        console.log("there is a problem in the server")
    }

} 

const port = process.env.PORT || 3000

app.listen(
   PORT,(()=>{`server runs on port${process.env.PORT}`})
)
}


// this code need to debuge 
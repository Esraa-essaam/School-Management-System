require("dotenv").config()
const express = require ("express")
const app = express()



app.use(express.json())

const mongoose = require("mongoose")

async function dbconnection() {
try{
    await mongoose.connect(process.env.DB_URL)

    console.log("server connect")

}
  
    catch(error){
        console.log("there is a problem in the server")
    }
}

dbconnection()

const port = process.env.PORT || 3000

app.listen(
   port,()=>{console.log(`server runs on port ${port}`)}
)


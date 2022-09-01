const express=require("express")
const dotenv=require("dotenv")
const results=require("./results")


const app=express();
dotenv.config();


//route
app.get("/", (req, res) => {
res.send("<h1>Welcome to our portal</h>")
})

// get all results
app.get("/results", (req, res)=> {
    res.json(results)
})


const PORT = process.env.PORT ||5000

app.listen(PORT, () =>
    console.log(`server is running on ${PORT}` )
)
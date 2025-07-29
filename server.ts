import express from "express"

const app = express()

const port = 3000


app.get('/',(req,res)=>{

    res.send ("Hellow")
})

app.listen(port,()=>{
    console.log(`server is ranning http://localhost:${port}`)
})
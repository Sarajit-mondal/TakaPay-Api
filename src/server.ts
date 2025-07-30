import app from "./app"


const port = 3000


const startServer = async()=>{

    
app.listen(port,()=>{
    console.log(`server is ranning http://localhost:${port}`)
})
}


startServer()
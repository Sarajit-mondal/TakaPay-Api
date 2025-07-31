import express, { Request, Response } from "express"
import { router } from "./app/route"


const app = express()


app.use('/api/v1',router)


app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
 res.status(200).json({
    message: "Welcom to tour management System backand"
  })
})
export default app
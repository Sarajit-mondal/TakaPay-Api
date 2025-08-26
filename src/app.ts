import express, { Request, Response } from "express"

import cors from 'cors'
import { router } from "./app/app/route"
import { globalErrorHandler } from "./app/app/middlewares/globalErrorHandler"
import notFound from "./app/app/middlewares/notFound"


const app = express()


app.use(express.json())
app.use(cors())



app.use('/api/v1',router)

app.get('/',(req:Request,res:Response)=>{
 res.status(200).json({
    message: "Welcom to TakaPay management System backand"
  })
})

app.use(globalErrorHandler)
app.use(notFound)
export default app
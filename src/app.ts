import express, { Request, Response } from "express"
import { router } from "./app/route"
import cors from 'cors'

import notFound from "./app/middlewares/notFound"
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler"

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
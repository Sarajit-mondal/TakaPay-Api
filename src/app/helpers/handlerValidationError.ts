import mongoose from "mongoose"
import { TErrorSources, TGenericErrorResponse } from "../interfaces/error.types"



/* eslint-disable @typescript-eslint/no-explicit-any */
export const handlerValidationError = (err: mongoose.Error.ValidationError): TGenericErrorResponse => {

    const errorSources: TErrorSources[] = []

    const errors = Object.values(err.errors)

    errors.forEach((errorObject: any) => errorSources.push({
        path: errorObject.path,
        message: errorObject.message
      
    }))
console.log(errorSources)

    return {
        statusCode: 400,
        message: "Validation Error",
       errorSources
    }


}

import dotenv from "dotenv"
import { string } from "zod"

dotenv.config()


interface IEnvConfig {
    PORT: string,
    DB_URL: string,
    NODE_ENV: "development" | "production"
    BCRYPT_SALT_ROUND: string
    JWT_ACCESS_SECRET: string
    JWT_ACCESS_EXPIRES: string
    JWT_REFRESH_SECRET: string
    JWT_REFRESH_EXPIRES: string
}



const loadEnvVariables = (): IEnvConfig => {
    const requiredEnvVariables: string[] = ["PORT", "DB_URL", "NODE_ENV","JWT_REFRESH_EXPIRES","JWT_REFRESH_SECRET","JWT_ACCESS_EXPIRES","JWT_ACCESS_SECRET","BCRYPT_SALT_ROUND"]

    requiredEnvVariables.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing require environment variabl ${key}`)
        }
    })



    return {
        PORT: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
        NODE_ENV: process.env.NODE_ENV as "development" | "production",
    BCRYPT_SALT_ROUND:process.env.BCRYPT_SALT_ROUND as string, 
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string, 
    JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES as string, 
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string, 
    JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES as string,

    }
}



export const envVars = loadEnvVariables()
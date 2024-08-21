import express from "express"
import cookieParser from 'cookie-parser'
import { corsMiddleware } from "./express/middlewares/cors"
import { PORT } from "./utils/KEYS_ENVIRONMENT"


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(corsMiddleware())

app.get('/', (_req, res) => {
    res.status(200).send("express with typescript!!" + new Date())
})

app.listen(PORT, () => {
    console.log(`App is running but the port: ${PORT}`)
})
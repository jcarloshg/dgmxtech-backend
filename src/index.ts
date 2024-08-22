import express from "express"
import cookieParser from 'cookie-parser'
import { corsMiddleware } from "./express/middlewares/cors"
import { PORT } from "./express/utils/KEYS_ENVIRONMENT"

import { itemRouter } from "./express/routes/item/item.route"
import { todoRouter } from "./express/routes/todo/todo.route"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(corsMiddleware())

app.use('/items', itemRouter)
app.use('/todos', todoRouter)

app.get('/', (_req, res) => res.status(200).send("Backend to dgmextech with TypeScript! 😎 "))

app.listen(PORT, () => console.log(`App is running by the port: ${PORT}`))
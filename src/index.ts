import express from "express"

const app = express()
app.use(express.json())

app.get('/', (_req, res) => {
    res.status(200).send("express with typescript!!" + new Date())
})

app.listen(3000, () => {
    console.log(`App is running but the port: ${3000}`)
})
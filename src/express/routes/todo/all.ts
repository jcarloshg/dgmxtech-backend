import { Router } from 'express'

export const all = Router()

all.get('/', (_req, res) => {
    res.status(200).send("hola")
})
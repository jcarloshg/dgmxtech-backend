import { Router } from 'express'

export const itemRouter = Router()

itemRouter.get('/', (_req, res) => res.status(200).json({ message: 'home times' }))
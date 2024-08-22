import { Router } from 'express'

export const todoRouter = Router()

todoRouter.get('/', (_req, res) => res.status(200).json({ message: '/todos ✅' }))
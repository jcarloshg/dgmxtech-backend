import { Router } from 'express'
import { all } from './all';
import { getByUUID } from './getByUUID';

export const todoRouter = Router()

todoRouter.get('/:uuid', getByUUID)
todoRouter.use("/all", all)
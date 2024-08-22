import { Router } from 'express'

import { all } from './all';
import { getByUUID } from './getByUUID';
import { createToDo } from './createToDo';

export const todoRouter = Router()

todoRouter.get('/', (_, res) => res.status(200).send('/todos ✅'))
todoRouter.get('/:uuid', getByUUID)

todoRouter.post("/create", createToDo)


todoRouter.use("/all", all)
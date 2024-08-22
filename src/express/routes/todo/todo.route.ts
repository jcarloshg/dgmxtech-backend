import { Router } from 'express'

import { getByUUID } from './getByUUID';
import { createToDo } from './createToDo';
import { listToDos } from './listTodos';

export const todoRouter = Router()

todoRouter.get('/', (_, res) => res.status(200).send('/todos ✅'))
todoRouter.get('/all', listToDos)
todoRouter.get('/:uuid', getByUUID)

todoRouter.post("/create", createToDo)
todoRouter.post("/:uuid/complete", createToDo)


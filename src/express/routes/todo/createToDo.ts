import { Request, Response } from 'express'
import { createTodoApplication } from '../../../uses_cases/application/aws/createTodo.application';

export const createToDo = async (req: Request, res: Response) => {

    const { title, description } = req.body;

    const customResponse = await createTodoApplication({ title, description });

    res.status(customResponse.status).send(customResponse);

}
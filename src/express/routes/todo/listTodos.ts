import { Request, Response } from 'express'
import { listToDosApplications } from '../../../uses_cases/application/aws/listToDos.applications';

export const listToDos = async (req: Request, res: Response) => {


    // const { completed, description, title } = req.query;
    // const isCompletedString = typeof completed === "string"
    // const isCompletedBoolean = isCompletedString && (completed === "true" || completed === "false")
    // const completedValue = isCompletedBoolean
    //     ? (completed === "true" ? true : false)
    //     : undefined

    const customResponse = await listToDosApplications()

    res.status(customResponse.status).send(customResponse);

}
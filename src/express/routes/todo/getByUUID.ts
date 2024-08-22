import { Request, Response } from 'express'
import { getToDoByUUIDApplication } from '../../../uses_cases/application/aws/getToDoByUUID.application';

export const getByUUID = async (req: Request, res: Response) => {

    const { uuid } = req.params;

    const customResponse = await getToDoByUUIDApplication(uuid)

    res.status(customResponse.status).send(customResponse);

}
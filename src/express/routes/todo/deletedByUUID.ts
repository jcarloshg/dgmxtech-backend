import { Request, Response } from 'express'
import { deleteByUUIDApplication } from '../../../uses_cases/application/aws/deleteByUUID.application';

export const deletedByUUID = async (req: Request, res: Response) => {

    const { uuid } = req.params;

    const customResponse = await deleteByUUIDApplication(uuid)

    res.status(customResponse.status).send(customResponse);

}
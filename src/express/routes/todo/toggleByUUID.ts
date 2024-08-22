import { Request, Response } from 'express'
import { toggleByUUIDApplication } from '../../../uses_cases/application/aws/toggleByUUID.application';

export const toggleByUUID = async (req: Request, res: Response) => {

    const { uuid } = req.params;

    const customResponse = await toggleByUUIDApplication(uuid)

    res.status(customResponse.status).send(customResponse);

}
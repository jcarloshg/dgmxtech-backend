import { Request, Response } from 'express'
import crypto from 'node:crypto'
import { GetToDoByUUIDAWS } from '../../../uses_cases/infrastructure/aws/ToDo/GetToDoByUUID.aws'
import { UUIDValueObject } from '../../../uses_cases/utils/domain/UUID.ValueObject';
import { catchResponseError } from '../../utils/getResponseError';



export const getByUUID = async (req: Request, res: Response) => {

    const { uuid } = req.params;

    console.log(crypto.randomUUID())

    try {
        new UUIDValueObject(uuid)
    } catch (error) {
        const a = catchResponseError(error as Error)
        return res.status(a.status).send(a);
    }

    const getToDoByIDAWS = new GetToDoByUUIDAWS();
    await getToDoByIDAWS.run(uuid);
    res.send("a");

}
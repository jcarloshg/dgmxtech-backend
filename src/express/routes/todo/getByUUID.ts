import { Request, Response } from 'express'
import crypto from 'node:crypto'
import { GetToDoByUUIDAWS } from '../../../uses_cases/infrastructure/aws/ToDo/GetToDoByUUID.aws'
import { UUIDValueObject } from '../../../uses_cases/utils/domain/UUID.ValueObject';



export const getByUUID = async (req: Request, res: Response) => {

    const { uuid } = req.params;

    const isValidUUID = UUIDValueObject.valid(uuid);
    if (isValidUUID === false) return res.status(400).send(`The UUID [${uuid}] is invalid.`);

    const getToDoByIDAWS = new GetToDoByUUIDAWS();
    await getToDoByIDAWS.run(uuid);
    res.send("a");

}
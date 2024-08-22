import { Request, Response } from 'express'
import { GetToDoByUUIDAWS } from '../../../uses_cases/infrastructure/aws/ToDo/GetToDoByUUID.aws'
import { UUIDValueObject } from '../../../uses_cases/utils/domain/UUID.ValueObject';
import { catchResponseError } from '../../utils/getResponseError';


export const getByUUID = async (req: Request, res: Response) => {

    const { uuid } = req.params;

    try {

        const uuidValidated = new UUIDValueObject(uuid);

        const getToDoByIDAWS = new GetToDoByUUIDAWS();
        const todo = await getToDoByIDAWS.run(uuidValidated.value);

        if (!todo) return res.status(404).send("not found");

        res.status(200).send(todo);

    } catch (error) {

        const customResponseError = catchResponseError(error as Error)
        return res.status(customResponseError.status).send(customResponseError);

    }

}
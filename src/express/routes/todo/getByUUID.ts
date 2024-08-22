import { Request, Response } from 'express'
import { GetToDoByUUIDAWS } from '../../../uses_cases/infrastructure/aws/ToDo/GetToDoByUUID.aws'
import { UUIDValueObject } from '../../../uses_cases/utils/domain/UUID.ValueObject';
import { catchResponseError } from '../../utils/getResponseError';
import { CustomResponseNotFound } from '../../../uses_cases/utils/domain/CustomResponse';


export const getByUUID = async (req: Request, res: Response) => {

    const { uuid } = req.params;

    try {

        // valid el uuid
        const uuidValidated = new UUIDValueObject(uuid);

        // make the search by uuid validated
        const getToDoByIDAWS = new GetToDoByUUIDAWS();
        const todo = await getToDoByIDAWS.run(uuidValidated.value);

        if (!todo) return res.status(CustomResponseNotFound.status).send(CustomResponseNotFound);

        res.status(200).send(todo);

    } catch (error) {

        const customResponseError = catchResponseError(error as Error)
        return res.status(customResponseError.status).send(customResponseError);

    }

}
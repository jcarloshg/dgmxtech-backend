
// infrastructure
import { GetToDoByUUIDAWS } from '../../infrastructure/aws/ToDo/GetToDoByUUID.aws';
// domain
import { ToDo } from '../../domain/schemas/ToDo';
import { CustomResponse } from '../../utils/domain/CustomResponse';
import { UUIDValueObject } from '../../utils/domain/UUID.ValueObject';
// utils
import { catchResponseError } from '../../../express/utils/getResponseError';


export const getToDoByUUIDApplication = async (uuid: string): Promise<CustomResponse<ToDo | null>> => {


    const MESSAGE_SUCCESS = "TODO found"
    const MESSAGE_ERROR = "TODO not found"


    try {


        // valid el uuid
        const uuidValidated = new UUIDValueObject(uuid);


        // make the search by uuid validated
        const getToDoByIDAWS = new GetToDoByUUIDAWS();
        const todo = await getToDoByIDAWS.run(uuidValidated.value);


        return {
            status: todo ? 200 : 404,
            message: todo ? MESSAGE_SUCCESS : MESSAGE_ERROR,
            data: todo
        }

    } catch (error) {

        return catchResponseError(error as Error)

    }

}


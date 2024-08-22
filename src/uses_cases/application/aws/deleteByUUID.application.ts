// infrastructure
import { catchResponseError } from "../../../express/utils/getResponseError";
import { DeleteByUUIDAWS } from "../../infrastructure/aws/ToDo/DeleteByUUID.aws";
import { GetToDoByUUIDAWS } from "../../infrastructure/aws/ToDo/GetToDoByUUID.aws";
// domain
import { CustomResponse } from "../../utils/domain/CustomResponse";
import { ErrorEntityNotExits } from "../../utils/domain/Error.EntityNotExits";
import { UUIDValueObject } from "../../utils/domain/UUID.ValueObject";

export const deleteByUUIDApplication = async (uuid: string): Promise<CustomResponse<undefined>> => {

    const MESSAGE_SUCCESS = "TODO deleted"
    const MESSAGE_ERROR = "Bad request"

    try {


        // valid el uuid
        const uuidValidated = new UUIDValueObject(uuid);


        // make the search by uuid validated
        const getToDoByIDAWS = new GetToDoByUUIDAWS();
        const todo = await getToDoByIDAWS.run(uuidValidated.value);
        if (todo === null) throw new ErrorEntityNotExits({ entityName: "ToDo" })

        // deleted
        const deleteByUUIDAWS = new DeleteByUUIDAWS()
        const response = await deleteByUUIDAWS.run(uuidValidated.value)


        return {
            status: response ? 200 : 400,
            message: response ? MESSAGE_SUCCESS : MESSAGE_ERROR,
        }

    } catch (error) {

        return catchResponseError(error as Error)

    }

}
import { GetToDoByUUIDAWS } from "../../infrastructure/aws/ToDo/GetToDoByUUID.aws";
// domain
import { ToDo } from "../../domain/schemas/ToDo";
import { CustomResponse } from "../../utils/domain/CustomResponse";
import { UUIDValueObject } from "../../utils/domain/UUID.ValueObject";
import { ErrorEntityNotExits } from "../../utils/domain/Error.EntityNotExits";
// utils
import { catchResponseError } from "../../../express/utils/getResponseError";
import { ToggleByUUIDAWS } from "../../infrastructure/aws/ToDo/ToggleByUUID.aws";

export const toggleByUUIDApplication = async (uuid: string): Promise<CustomResponse<ToDo | null>> => {

    const MESSAGE_SUCCESS = "TODO updated"
    const MESSAGE_ERROR = "Internal error"

    try {

        // valid el uuid
        const uuidValidated = new UUIDValueObject(uuid);

        // exist the ToDo
        const getToDoByIDAWS = new GetToDoByUUIDAWS();
        const todo = await getToDoByIDAWS.run(uuidValidated.value);
        if (todo === null) throw new ErrorEntityNotExits({ entityName: "ToDo" })

        // update todo
        const toggleByUUIDAWS = new ToggleByUUIDAWS()
        const toDoUpdated = await toggleByUUIDAWS.run(uuidValidated.value, !todo.completed)

        return {
            status: toDoUpdated ? 200 : 500,
            message: toDoUpdated ? MESSAGE_SUCCESS : MESSAGE_ERROR,
            data: todo
        }

    } catch (error) {

        return catchResponseError(error as Error)

    }

}
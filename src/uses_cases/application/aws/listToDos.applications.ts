// infrastructure
import { ListToDosAWS } from "../../infrastructure/aws/ToDo/ListToDos.aws";
// domain
import { CustomResponse } from "../../utils/erros/CustomResponse";
import { ToDo } from "../../domain/schemas/ToDo";
// utils
import { catchResponseError } from "../../../express/utils/getResponseError";


export const listToDosApplications = async (): Promise<CustomResponse<ToDo[]>> => {


    const MESSAGE_SUCCESS = "ToDos found"

    try {

        // run query
        const listToDosAWS = new ListToDosAWS()
        const response = await listToDosAWS.run()

        return {
            status: 200,
            message: MESSAGE_SUCCESS,
            data: response
        }


    } catch (error) {

        return catchResponseError(error as Error)

    }

}
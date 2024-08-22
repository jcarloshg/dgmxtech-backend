
import { CustomResponse } from "../../uses_cases/utils/erros/CustomResponse"
import { ErrorEntityNotExits } from "../../uses_cases/utils/erros/Error.EntityNotExits"
import { ErrorValueObject } from "../../uses_cases/utils/erros/Error.ValueObject"


export const catchResponseError = (error: Error): CustomResponse<any> => {


    if (error instanceof ErrorValueObject) return ErrorValueObject.generateCustomResponse(error.message)

    if (error instanceof ErrorEntityNotExits) return ErrorEntityNotExits.generateCustomResponse(error.message)


    return { status: 500, message: "unknown" }

}
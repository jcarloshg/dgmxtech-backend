
import { CustomResponseError } from "../../uses_cases/utils/domain/CustomResponse"
import { ErrorValueObject } from "../../uses_cases/utils/domain/ErrorValueObject"


export const catchResponseError = (error: Error): CustomResponseError<any> => {

    if (error instanceof ErrorValueObject) return ErrorValueObject.generateCustomResponse(error.message)

    return { status: 500, type: "UNKNOWN", message: "UNKNOWN" }

}
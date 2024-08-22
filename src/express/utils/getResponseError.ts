
import { ErrorValueObject } from "../../uses_cases/utils/domain/ErrorValueObject"

export interface CustomResponseError {
    status: number,
    type: "INVALID_DATA" | "UNKNOWN",
    message: "UNKNOWN" | string,
}

export const catchResponseError = (error: Error): CustomResponseError => {

    if (error instanceof ErrorValueObject) return { status: 400, type: "INVALID_DATA", message: error.message }

    return { status: 500, type: "UNKNOWN", message: "UNKNOWN" }

}
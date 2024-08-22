import { CustomResponseError } from "./CustomResponse"

export class ErrorValueObject extends Error {

    constructor(message: string) {
        super(message)
        this.name = "ErrorValueObject"
    }

    static generateCustomResponse(message: string): CustomResponseError<undefined> {
        const customResponseError: CustomResponseError<undefined> = {
            type: "INVALID_DATA",
            status: 404,
            message: message
        }
        return customResponseError;
    }

}
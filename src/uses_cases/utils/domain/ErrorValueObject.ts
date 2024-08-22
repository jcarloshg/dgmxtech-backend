export class ErrorValueObject extends Error {

    constructor(message: string) {
        super(message)
        this.name = "ErrorValueObject"
    }

}
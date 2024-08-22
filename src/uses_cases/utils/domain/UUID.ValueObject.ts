import { ErrorValueObject } from './ErrorValueObject';
import { ValueObject } from './ValueObject';

export class UUIDValueObject extends ValueObject<string> {

    RULES_STRING: string = "Check the UUID.";
    MESSAGE_TO_ERROR: string = `The Value${this.RULES_STRING}`;

    constructor(uuid: string) {

        super(uuid);

        const isValid = this._isValid(uuid);
        if (isValid === false) throw new ErrorValueObject(this.MESSAGE_TO_ERROR)

    }

    private _isValid(uuid: string): boolean {
        const regex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');
        return regex.test(uuid);
    }

}
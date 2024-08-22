export abstract class ValueObject<T> {

    private _value: T;

    abstract RULES_STRING: string;
    abstract MESSAGE_TO_ERROR: string

    constructor(value: T) {
        this._value = value
    }

    get value(): T {
        return this._value
    }

}
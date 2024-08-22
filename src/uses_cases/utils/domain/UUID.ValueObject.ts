import crypto from 'node:crypto'

export class UUIDValueObject {

    public static generateUUID(): string {
        return crypto.randomUUID()
    }

    public static valid(uuid: string): boolean {
        const regex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');
        return regex.test(uuid);
    }

}
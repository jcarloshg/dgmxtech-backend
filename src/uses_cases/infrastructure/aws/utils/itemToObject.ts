import { AttributeValue } from "@aws-sdk/client-dynamodb";

export const itemToModel = <T>(item: Record<string, AttributeValue>): T | null => {

    const itemObject = JSON.parse(JSON.stringify(item));

    Object.keys(itemObject).forEach(
        (key) => {
            const value = Object.values(itemObject[key])[0] ?? null;
            itemObject[key] = value;
        }
    )

    try {

        return itemObject as T

    } catch (error) {

        return null

    }

}
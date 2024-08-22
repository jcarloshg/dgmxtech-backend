import { AttributeValue } from "@aws-sdk/client-dynamodb";

export const itemToModel = <T>(item: Record<string, AttributeValue>): T | null => {

    Object.keys(item).forEach(
        (key) => {
            const value = Object.values(item[key])[0] ?? null;
            item[key] = value;
        }
    )

    try {
        const model: T = item as T;
        return model
    } catch (error) {
        console.log(`[error] -> `, error);
        return null
    }


}
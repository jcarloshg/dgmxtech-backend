import { UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import { AWS_DYNAMODB_TODO_TABLE_NAME } from '../config/awsKeys';
import { DynamoDBClientInitialized } from "../config/config.DinamoDB";
// domain
import { ToggleByUUIDRepository } from '../../../domain/repository/Todo/ToggleByUUID.repository';
import { ToDo } from '../../../domain/schemas/ToDo';
import { itemToModel } from '../utils/itemToObject';

export class ToggleByUUIDAWS implements ToggleByUUIDRepository {

    async run(uuid: string, completed: boolean): Promise<ToDo | null> {

        const command = new UpdateItemCommand({
            TableName: AWS_DYNAMODB_TODO_TABLE_NAME,
            Key: { "uuid": { S: uuid } },
            ExpressionAttributeNames: { "#completed": "completed" },
            ExpressionAttributeValues: { ":completed": { BOOL: completed } },
            UpdateExpression: "SET #completed = :completed",
            ReturnValues: "ALL_NEW"
        });

        const res = await DynamoDBClientInitialized.send(command);

        const attributes = res.Attributes

        if (attributes == null) return null

        return itemToModel<ToDo>(attributes)

    }

}
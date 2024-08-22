import { DeleteItemCommand } from '@aws-sdk/client-dynamodb';
import { AWS_DYNAMODB_TODO_TABLE_NAME } from '../config/awsKeys';
import { DynamoDBClientInitialized } from '../config/config.DinamoDB';
// domain
import { DeleteByUUIDRepository } from '../../../domain/repository/Todo/DeleteByUUID.repository';

export class DeleteByUUIDAWS implements DeleteByUUIDRepository {


    async run(uuid: string): Promise<boolean> {

        const command = new DeleteItemCommand({
            TableName: AWS_DYNAMODB_TODO_TABLE_NAME,
            Key: {
                uuid: {
                    S: uuid
                }
            },
        })

        try {

            await DynamoDBClientInitialized.send(command)
            return true

        } catch (error) {

            return false
        }

    }

}
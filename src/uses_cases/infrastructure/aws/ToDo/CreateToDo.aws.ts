

// aws
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBClientInitialized } from "../config/config.DinamoDB";
import { AWS_DYNAMODB_TODO_TABLE_NAME } from "../config/awsKeys";
// domain
import { CreateTodoRepository } from "../../../domain/repository/Todo/CreateTodo.repository";
import { ToDo } from "../../../domain/schemas/ToDo";


export class CreateToDoAWS implements CreateTodoRepository {

    async run(toDo: ToDo): Promise<boolean> {

        const command = new PutItemCommand({
            TableName: AWS_DYNAMODB_TODO_TABLE_NAME,
            Item: {
                uuid: { S: toDo.uuid },
                title: { S: toDo.title },
                description: { S: toDo.description },
                completed: { BOOL: toDo.completed },
            }
        });

        try {

            await DynamoDBClientInitialized.send(command);
            return true

        } catch (error) {

            return false;
        }



    }

}

import { GetItemCommand, } from "@aws-sdk/client-dynamodb";
import { GetToDoByUUIDRepository } from "../../../domain/repository/Todo/GetToDoByUUID.repository";
import { ToDo } from "../../../domain/schemas/ToDo";
import { DynamoDBClientInitialized } from "../config/config.DinamoDB";
import { AWS_DYNAMODB_TODO_TABLE_NAME } from "../config/awsKeys";
import { itemToModel } from "../utils/itemToObject";



export class GetToDoByUUIDAWS implements GetToDoByUUIDRepository {

  public async run(uuid: string): Promise<ToDo | null> {

    const getItemCommand: GetItemCommand = new GetItemCommand({
      TableName: AWS_DYNAMODB_TODO_TABLE_NAME,
      Key: {
        uuid: {
          S: uuid
        }
      },
    })

    const response = await DynamoDBClientInitialized.send(getItemCommand);

    const todoItem = JSON.parse(JSON.stringify(response.Item));

    return itemToModel<ToDo>(todoItem)
  }

}
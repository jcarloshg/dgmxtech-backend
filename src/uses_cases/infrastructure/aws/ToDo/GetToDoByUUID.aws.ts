
// aws
import { GetItemCommand, } from "@aws-sdk/client-dynamodb";
import { DynamoDBClientInitialized } from "../config/config.DinamoDB";
import { AWS_DYNAMODB_TODO_TABLE_NAME } from "../config/awsKeys";
// domain
import { GetToDoByUUIDRepository } from "../../../domain/repository/Todo/GetToDoByUUID.repository";
import { ToDo } from "../../../domain/schemas/ToDo";
// utils
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

    const item = response.Item

    if (item === undefined) return null

    return itemToModel<ToDo>(item)

  }

}
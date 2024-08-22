// aws
import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBClientInitialized } from "../config/config.DinamoDB";
import { AWS_DYNAMODB_TODO_TABLE_NAME } from "../config/awsKeys";
// domain
import { ListToDosRepository } from '../../../domain/repository/Todo/ListToDos.repository';
import { ToDo } from "../../../domain/schemas/ToDo";
// utils
import { itemToModel } from "../utils/itemToObject";


export class ListToDosAWS implements ListToDosRepository {

  async run(): Promise<ToDo[]> {

    const queryCommand = new ScanCommand({
      TableName: AWS_DYNAMODB_TODO_TABLE_NAME,
    })

    const response = await DynamoDBClientInitialized.send(queryCommand);

    const items = response.Items

    if (items === undefined) return []

    const todos: ToDo[] = items
      .map(item => itemToModel<ToDo>(item))
      .filter(item => item !== null)

    return todos
  }


}
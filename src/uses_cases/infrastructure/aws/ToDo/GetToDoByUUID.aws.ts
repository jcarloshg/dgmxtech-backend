import { GetToDoByUUIDRepository } from "../../../domain/repository/Todo/GetToDoByUUID.repository";
import { ToDo } from "../../../domain/schemas/ToDo";

export class GetToDoByUUIDAWS implements GetToDoByUUIDRepository {

  constructor() { }

  public async run(uuid: string): Promise<ToDo | null> {
    console.log(`[uuid] -> `, uuid);
    return null;
  }

}
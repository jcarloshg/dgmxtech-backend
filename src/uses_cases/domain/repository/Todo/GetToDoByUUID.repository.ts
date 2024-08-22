import { ToDo } from "../../schemas/ToDo";

export interface GetToDoByUUIDRepository {
    run: (uuid: string) => Promise<ToDo | null>
}

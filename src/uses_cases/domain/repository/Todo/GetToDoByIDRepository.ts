import { ToDo } from "../../schemas/ToDo";

export interface GetToDoByIDRepository {
    run: (id: number) => Promise<ToDo | null>
}

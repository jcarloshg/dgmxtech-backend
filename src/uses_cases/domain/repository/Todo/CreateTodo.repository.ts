import { ToDo } from "../../schemas/ToDo";

export interface CreateTodoRepository {
    run: (data: ToDo) => Promise<boolean>
}

import { ToDo } from "../../schemas/ToDo";

// export interface ListToDosQuery {
//     title?: string,
//     description?: string,
//     completed?: boolean,
// }

export interface ListToDosRepository {

    run: () => Promise<ToDo[]>

}

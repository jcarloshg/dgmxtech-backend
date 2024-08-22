import { ToDo } from "../../schemas/ToDo";

export interface ToggleByUUIDRepository {
    run: (uuid: string, completed: boolean) => Promise<ToDo | null>
}
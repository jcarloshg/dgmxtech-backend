// infrastructure
import { CreateToDoAWS } from "../../infrastructure/aws/ToDo/CreateToDo.aws";
// domain
import { CustomResponse } from "../../utils/domain/CustomResponse";
import { TodoTitleValueObject } from "../../utils/domain/TodoTitleValueObject";
import { TodoDescriptionValueObject } from "../../utils/domain/TodoDescriptionValueObject";
import { ToDoDataToCreate } from "../../domain/schemas/ToDo";
// utils
import { catchResponseError } from "../../../express/utils/getResponseError";
import { randomUUID } from "crypto"

export interface Props { title: string, description: string }

export const createTodoApplication = async ({ title, description }: Props): Promise<CustomResponse<any>> => {

    const MESSAGE_SUCCESS = "A new ToDo was created"
    const MESSAGE_ERROR = "Internal error"

    try {

        const todoTitleValueObject = new TodoTitleValueObject(title);
        const todoDescriptionValueObject = new TodoDescriptionValueObject(description);

        const newTodo: ToDoDataToCreate = {
            completed: false,
            // uuid: randomUUID(),
            uuid: randomUUID(),
            title: todoTitleValueObject.value,
            description: todoDescriptionValueObject.value,
        }

        const createToDoAWS = new CreateToDoAWS()
        const wasCreated = await createToDoAWS.run(newTodo)


        return {
            status: wasCreated ? 200 : 500,
            message: wasCreated ? MESSAGE_SUCCESS : MESSAGE_ERROR,
            data: newTodo
        }

    } catch (error) {

        return catchResponseError(error as Error)

    }
}
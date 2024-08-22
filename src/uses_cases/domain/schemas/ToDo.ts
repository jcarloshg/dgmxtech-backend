export interface ToDo {
    uuid: string,
    title: string,
    description: string,
    completed: boolean,
}


export interface ToDoDataToCreate extends Pick<ToDo, "title" | "description"> {
    completed: false,
}

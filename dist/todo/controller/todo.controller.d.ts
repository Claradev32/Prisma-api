import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getAllTodo(): Promise<Todo[]>;
    createTodo(postData: Todo): Promise<Todo>;
    getTodo(id: number): Promise<Todo | null>;
    Update(id: number): Promise<Todo>;
    Delete(id: number): Promise<Todo>;
}

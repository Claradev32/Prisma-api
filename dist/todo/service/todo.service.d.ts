import { PrismaService } from '../../prisma.service';
import { Todo } from '@prisma/client';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTodo(): Promise<Todo[]>;
    getTodo(id: number): Promise<Todo | null>;
    createTodo(data: Todo): Promise<Todo>;
    updateTodo(id: number): Promise<Todo>;
    deleteTodo(id: number): Promise<Todo>;
}

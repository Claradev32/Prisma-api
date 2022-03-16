import { PrismaService } from '../../prisma.service';
import { User, Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    users(): Promise<User[]>;
    user(id: number): Promise<User | null>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    updateUser(id: string, data: User): Promise<User>;
    deleteUser(id: number): Promise<User>;
}

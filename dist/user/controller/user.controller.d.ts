import { UserService } from '../service/user.service';
import { User as UserModel } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    Users(): Promise<UserModel[]>;
    Create(postData: UserModel): Promise<UserModel>;
    User(id: number): Promise<UserModel | null>;
    Update(id: string, postData: UserModel): Promise<UserModel>;
    Delete(id: number): Promise<UserModel>;
}

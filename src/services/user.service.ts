import { Injectable } from "@nestjs/common";
//import { v4 as uuidv4 } from 'uuid';
import { UserDto } from "../dto/user.dto";

import { User } from "../schemas/user.schema";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserService {
    constructor(private readonly usersRepository: UserRepository) {}

    async getUserById(userId: string): Promise<User> {
        return this.usersRepository.findOne({ userId })
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(name: string, email: string, password: string): Promise<User> {
        return this.usersRepository.create({
          name,  
          email,
          password
        })
    }

    async updateUser(userId: string, userUpdates: UserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    }
}
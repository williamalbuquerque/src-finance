import { Injectable } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";
import { User } from "../schemas/user.schema";
import { UserRepository } from "../repositories/user.repository";
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly usersRepository: UserRepository) {}

    async getUserById(_id: string): Promise<User> {
        return this.usersRepository.findOne({ _id })
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(name: string, email: string, password: string): Promise<User> {
        return this.usersRepository.create({
          _id: uuidv4(),
          name,  
          email,
          password
        })
    }

    async updateUser(userId: string, userUpdates: UserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    }

    async validateUser(email: string, password: string): Promise<any> {
        return await this.usersRepository.findOne({email})
            .then((user: User) => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const {_id, name, email } = user;
                    return {_id, name, email};
                }                
               return null                
            })
    }
}
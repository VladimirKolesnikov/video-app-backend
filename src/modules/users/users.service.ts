import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user-create.dto';
// import { UpdateUserDto } from './user-update-dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepo: Repository<Users>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<Users> {
        const newUser = this.usersRepo.create(createUserDto);
        return await this.usersRepo.save(newUser);
    }

    async findAll(): Promise<Users[]> {
        return await this.usersRepo.find();
    }

    async findOne(id: number): Promise<Users | null> {
        const user = await this.usersRepo.findOneBy({ id });
        if (!user) {
            // send "there is no user with this id"
        }
        return user;
    }

    // async update(id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    // ...
    // }

    async remove(id: number): Promise<void> {
        const result = await this.usersRepo.delete(id);
        if (result.affected === 0) {
            // send "there is no user with this id"
        }
    }
}

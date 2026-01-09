import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UsersService } from "./users.service"
import { Users } from "./users.entity";
import { CreateUserDto } from "./user-create.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getUsers(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): Promise<Users | null> {
        return this.usersService.findOne(+id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
        return this.usersService.create(createUserDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.remove(id);
    }
}

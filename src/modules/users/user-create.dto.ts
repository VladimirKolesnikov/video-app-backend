import { IsEmail } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, { message: 'incorrect email format' })
    email: string;
}
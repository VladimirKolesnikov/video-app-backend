import { CreateUserDto } from "./user-create.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// export class UpdateUserDto {
//     name?: string;
//     email?: string;
//     password?: string;
// }
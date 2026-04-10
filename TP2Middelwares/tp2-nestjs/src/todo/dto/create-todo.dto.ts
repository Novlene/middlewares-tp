import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @IsString()
  @MinLength(10)
  description: string;
}
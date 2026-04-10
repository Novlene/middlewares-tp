import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class TodoController {
  constructor(private service: TodoService) {}

  @Post()
  create(@Body() dto: CreateTodoDto, @Req() req) {
    return this.service.create(dto, req.userId);
  }

  @Get()
  findAll(@Req() req) {
    return this.service.findAll(req.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    return this.service.findOne(id, req.userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTodoDto, @Req() req) {
    return this.service.update(id, dto, req.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.service.remove(id, req.userId);
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private repo: Repository<Todo>) {}

  create(dto: CreateTodoDto, userId: string) {
    return this.repo.save({ ...dto, userId });
  }

  findAll(userId: string) {
    return this.repo.find({ where: { userId } });
  }

  async findOne(id: string, userId: string) {
    const todo = await this.repo.findOne({ where: { id, userId } });
    if (!todo) throw new NotFoundException('Todo non trouvé ou non autorisé');
    return todo;
  }

  async update(id: string, dto: UpdateTodoDto, userId: string) {
    const todo = await this.findOne(id, userId);
    Object.assign(todo, dto);
    return this.repo.save(todo);
  }

  async remove(id: string, userId: string) {
    const todo = await this.findOne(id, userId);
    return this.repo.remove(todo);
  }
}
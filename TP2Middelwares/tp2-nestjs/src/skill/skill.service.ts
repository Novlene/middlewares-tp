import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(@InjectRepository(Skill) private repo: Repository<Skill>) {}

  create(skill: Skill) {
    return this.repo.save(skill);
  }
}
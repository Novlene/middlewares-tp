import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cv } from './entities/cv.entity';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';

@Injectable()
export class CvService {
  findOne(id: number, userId: any) {
    throw new Error('Method not implemented.');
  }
  findAllByUser(userId: any) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectRepository(Cv) private repo: Repository<Cv>) {}

  create(dto: CreateCvDto) {
    const cv = this.repo.create(dto);
    return this.repo.save(cv);
  }

  findAll() {
    return this.repo.find();
  }

  findOneById(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateCvDto) {
    const cv = await this.repo.preload({ id, ...dto });
    if (!cv) throw new NotFoundException(`CV #${id} non trouvé`);
    return this.repo.save(cv);
  }

  async remove(id: number) {
    const result = await this.repo.delete(id);
    if (result.affected === 0) throw new NotFoundException(`CV #${id} non trouvé`);
  }
}
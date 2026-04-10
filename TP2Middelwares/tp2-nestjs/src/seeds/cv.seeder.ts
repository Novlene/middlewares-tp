import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UserService } from '../user/user.service';
import { SkillService } from '../skill/skill.service';
import { CvService } from '../cv/cv.service';
import { User } from '../user/entities/user.entity';
import { Skill } from '../skill/entities/skill.entity';
import { Cv } from '../cv/entities/cv.entity';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);
  const skillService = app.get(SkillService);
  const cvService = app.get(CvService);

  const user = new User();
  user.username = 'aymen';
  user.email = 'aymen@example.com';
  user.password = '123';
  await userService.create(user);

  const dev = new Skill();
  dev.designation = 'Développement';
  await skillService.create(dev);

  const design = new Skill();
  design.designation = 'Design';
  await skillService.create(design);

  const cv = new Cv();
  cv.name = 'ghzaiel';
  cv.firstname = 'Novlene';
  cv.age = 35;
  cv.job = 'student';
  cv.user = user;
  cv.skills = [dev, design];
  await cvService.create(cv);

  console.log('✅ Base de données peuplée avec succès !');
  await app.close();
}

seed();
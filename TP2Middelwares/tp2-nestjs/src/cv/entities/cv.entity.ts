import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Skill } from '../../skill/entities/skill.entity';

@Entity()
export class Cv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  firstname: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  cin: string;

  @Column({ nullable: true })
  job: string;

  @Column({ nullable: true })
  path: string;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToMany(() => Skill, { eager: true })
  @JoinTable()
  skills: Skill[];
}
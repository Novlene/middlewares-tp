import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum TodoStatusEnum {
  waiting = 'En attente',
  actif = 'En cours',
  done = 'Finalisé',
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 15 })
  name: string;

  @Column({ length: 255 })
  description: string;

  @Column({ type: 'enum', enum: TodoStatusEnum, default: TodoStatusEnum.waiting })
  status: TodoStatusEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  userId: string;
}
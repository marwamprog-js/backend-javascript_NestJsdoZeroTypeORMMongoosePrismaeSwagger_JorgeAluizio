import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './courses.entity';
import { randomUUID } from 'node:crypto';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Course, (course) => course.tags)
  courses: Course[];

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  /**
   * Gerador de UUID
   *
   * Método verifica se já existe UUID,
   * caso contrario, gera um novo.
   * @returns
   */
  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }

    this.id = randomUUID();
  }
}

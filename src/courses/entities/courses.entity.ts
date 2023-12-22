import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './tags.entity';
import { randomUUID } from 'node:crypto';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.courses, {
    cascade: true,
  })
  tags: Tag[];

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

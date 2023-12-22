import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1703186600082 } from '../migrations/1703186600082-CreateCoursesTable';
import { CreateTagsTable1703188175623 } from '../migrations/1703188175623-CreateTagsTable';
import { CreateCoursesTagsTable1703244317449 } from '../migrations/1703244317449-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1703245021256 } from '../migrations/1703245021256-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1703246089065 } from '../migrations/1703246089065-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1703186600082,
    CreateTagsTable1703188175623,
    CreateCoursesTagsTable1703244317449,
    AddCoursesIdToCoursesTagsTable1703245021256,
    AddTagsIdToCoursesTagsTable1703246089065,
  ],
});

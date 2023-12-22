import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1703186600082 } from '../migrations/1703186600082-CreateCoursesTable';
import { CreateTagsTable1703188175623 } from '../migrations/1703188175623-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1703186600082, CreateTagsTable1703188175623],
});

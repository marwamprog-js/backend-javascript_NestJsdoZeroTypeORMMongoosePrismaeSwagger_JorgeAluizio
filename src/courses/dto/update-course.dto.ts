import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-course.dto';

//PartialType pega todos os dados e configuraçães da class que foi extendida.
export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {} 
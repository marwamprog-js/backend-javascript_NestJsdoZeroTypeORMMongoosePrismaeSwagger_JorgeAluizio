import { IsString } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true }) //Each cada elemento do array tem q ser String.
  readonly tags: string[];
}

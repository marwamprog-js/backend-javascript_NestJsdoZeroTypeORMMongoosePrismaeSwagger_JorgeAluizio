import { IsString } from "class-validator";

export class CreateCourseDTO {

    @IsString()
    readonly name: String;

    @IsString()
    readonly description: String;
    
    @IsString({ each: true }) //Each cada elemento do array tem q ser String.
    readonly tags: String[];
}
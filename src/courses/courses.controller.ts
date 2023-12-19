import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    
    constructor(
        private readonly courseService: CoursesService
    ) {}

    @Get()
    findAll(@Res() response) {
        return response.status(200).json({
            message: 'Listagem de cursos'
        });
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return `Curso com ID: ${id}`;
    }
    
    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Res() response, @Param('id') id: number, @Body() body) {
        return response.status(200).json({
            id,
            name: body.name,
            description: body.description,
            tags: body.tags,
        });
    }

    @Delete(':id')
    remove(@Res() response, @Param('id') id: number) {
        return response.status(200).json({
            message: `Curso de ID '${id}', removido com sucesso!`,
        });
    }

    // @HttpCode(HttpStatus.NO_CONTENT)
    // @Delete(':id')
    // remove(@Param('id') id: number) {
        
    // }
}

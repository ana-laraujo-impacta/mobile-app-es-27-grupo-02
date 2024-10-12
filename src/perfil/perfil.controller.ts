import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PerfilService } from './perfil.service';
@Controller('users')
export class PerfilController {
    constructor (private readonly perfilService: PerfilService) {}

    @Get()
    findAll() {
        return this.perfilService.findAll();//retornoi todos o usuarios
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.perfilService.findOne(id);// aqui eu retorno usuario pelo id
    }

    @Post()
    create(@Body() createUserDto: any) {
        return this.perfilService.create(createUserDto);// cria um novo usuario
    }
}
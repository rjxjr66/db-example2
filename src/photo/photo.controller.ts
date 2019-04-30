import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from '../model';

@Controller('photos')
export class PhotoController {
    constructor(
        private readonly photoService: PhotoService
    ) { }

    @Get()
    findAll() {
        return this.photoService.findAll();
    }

    @Post()
    save(
        @Body() photo: Photo
    ) {

        return this.photoService.save(photo);
    }

    @Get(':id')
    findOne(
        @Param('id') id: number
    ) {
        return this.photoService.findOne(id)
    }
}

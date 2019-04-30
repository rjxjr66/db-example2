import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from '../model'

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ) {}

    async findAll(): Promise<Photo[]> {
        // SELECT * FROM photo;
        return this.photoRepository.find();
    }

    findOne(id) {
        return this.photoRepository.findOne(id);
    }

    save(photo: Photo): Promise<Photo> {
        return this.photoRepository.save(photo);
    }
}

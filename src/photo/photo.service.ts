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

    findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }

    save(photo: Photo): Promise<Photo> {
        return this.photoRepository.save(photo);
    }
}

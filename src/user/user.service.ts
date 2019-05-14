import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    findAll() {
        return this.userRepository.find({ relations: [ 'photos' ] });
    }

    save(user) {
        return this.userRepository.save(user);
    }

    delete(id) {
        return this.userRepository.delete(id);
    }
}

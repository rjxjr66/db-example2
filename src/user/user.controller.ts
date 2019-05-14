import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    find() {
        return this.userService.findAll();
    }

    @Post()
    save(@Body() body) {
        return this.userService.save(body);
    }
}

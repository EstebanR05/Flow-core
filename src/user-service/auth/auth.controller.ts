import { ConflictException, Controller, NotFoundException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import type { ITUserChangePassword, ITUserLogin, ITUserRegister } from './types/user-dto';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { TypedBody, TypedRoute } from '@nestia/core';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @TypedRoute.Post('login')
    @UseGuards(JwtAuthGuard)
    async login(
        @TypedBody() userLogin: ITUserLogin,
    ) {
        return await this.authService.validateUser(userLogin);
    }

    @TypedRoute.Post('register')
    async register(
        @TypedBody() userRegister: ITUserRegister
    ) {
        const user = await this.authService.registerUser(userRegister);
        if (!user) {
            throw new ConflictException();
        }
        return user;
    }

    @TypedRoute.Put('change-password')
    @UseGuards(JwtAuthGuard)
    async changePassword(
        @TypedBody() userChangePassword: ITUserChangePassword
    ) {
        const user = await this.authService.changePassword(userChangePassword);
        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }

}

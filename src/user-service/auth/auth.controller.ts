import { Body, ConflictException, Controller, NotFoundException, Post, Put, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import type { ITUserChangePassword, ITUserLogin, ITUserRegister } from './types/user-dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(
        @Body() userLogin: ITUserLogin,
    ) {
        const user = await this.authService.validatedUser(userLogin.email, userLogin.password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

    @Post('register')
    async register(
        @Body() userRegister: ITUserRegister
    ) {
        const user = await this.authService.registerUser(userRegister.name, userRegister.email, userRegister.password);
        if (!user) {
            throw new ConflictException();
        }
        return user;
    }

    @Put('change-password')
    async changePassword(
        @Body() userChangePassword: ITUserChangePassword
    ) {
        const user = await this.authService.changePassword(userChangePassword.email, userChangePassword.newPassword);
        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }

}

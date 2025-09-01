import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { ITUserChangePassword, ITUserLogin, ITUserRegister } from './types/user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaClient,
        private jwtService: JwtService
    ) { }

    public async validateUser({ email, password }: ITUserLogin) {
        const foundUser = await this.prisma.user.findUnique({ where: { email } });
        const isPasswordValid = await bcrypt.compare(password, foundUser?.password);
        if (!foundUser || !isPasswordValid) throw new HttpException('user.auth.invalid_user_auth', HttpStatus.NOT_FOUND);
        const { password: passwordHash, ...userWithoutPassword } = foundUser;
        return this.jwtService.sign(userWithoutPassword);
    }

    public async registerUser(user: ITUserRegister) {
        const passwordHash: string = await bcrypt.hash(user.password, 10); // 10 es el salt rounds
        return await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: passwordHash,
                createdAt: new Date()
            }
        });
    }

    async changePassword(userChangePassword: ITUserChangePassword) {
        const user = await this.prisma.user.findUnique({ where: { email: userChangePassword.email } });
        if (!user) return null;

        const passwordHash: string = await bcrypt.hash(userChangePassword.newPassword, 10);
        return await this.prisma.user.update({
            where: { email: userChangePassword.email },
            data: { password: passwordHash },
        });
    }
}

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaClient) { }

    async validatedUser(email: string, password: string) {
        const user = await this.prisma.usuario.findUnique({ where: { email } });
        if (!user) return null;
        const isValid = password === 'your_password_validation_logic';
        return isValid ? user : null;
    }

    async registerUser(name: string, email: string, password: string) {
        return await this.prisma.usuario.create({
            data: {
                email,
                nombre: name,
                password,
            },
        });
    }

    async changePassword(email: string, newPassword: string) {
        const user = await this.prisma.usuario.findUnique({ where: { email } });
        if (!user) return null;

        return await this.prisma.usuario.update({
            where: { email },
            data: { password: newPassword },
        });
    }
}

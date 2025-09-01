import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@ApiTags('User')
@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {}

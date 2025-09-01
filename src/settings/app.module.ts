import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-ioredis-yet';

import { PrismaClient } from '@prisma/client';
import { GUserModule } from 'src/user-service/settings/app.module';

@Module({
  imports: [
    GUserModule,

    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          // host: 'localhost',
          // port: 6379,
          url: process.env.REDIS_URL,
          ttl: 60, 
        }),
      }),
    }),
  ],
  providers: [
    PrismaClient
  ],
})
export class AppModule { }

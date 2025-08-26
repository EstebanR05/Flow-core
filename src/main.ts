import { NestFactory } from '@nestjs/core';
import { AppModule } from './settings/app.module';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new CacheInterceptor(app.get('CACHE_MANAGER'), app.get(Reflector)));
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

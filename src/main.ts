import { NestFactory, Reflector } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';

import { AppModule } from './settings/app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  app.enableCors({ origin: '*' });
  app.useGlobalInterceptors(new CacheInterceptor(app.get('CACHE_MANAGER'), app.get(Reflector)));
  app.useWebSocketAdapter(new IoAdapter(app));
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(port, () => Logger.log(`Server running on http://localhost:${port}`));
}

bootstrap();

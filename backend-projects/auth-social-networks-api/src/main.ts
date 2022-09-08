import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const logger = new Logger('main');

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const port = process.env.APP_PORT || 3000;
  await app.listen(port);
  logger.log(`🚀 app running port ${port}`);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000; // Você pode mudar a porta se necessário

  await app.listen(port);
  Logger.log(`Aplicação está rodando em: http://localhost:${port}`);
}

bootstrap();


import { NestFactory } from '@nestjs/core';
import { ApolloServer } from 'apollo-server-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // اگه دقیق‌تر می‌خوای، می‌تونی به جای '*'، دامنه فرانت رو بدی مثلاً 'http://localhost:3000'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  await app.listen(process.env.PORT ?? 4444);
  console.log('Nest server running on 4444')
}
bootstrap();

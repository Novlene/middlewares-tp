import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Bootstrap function
 * Initializes and starts the NestJS application
 */
async function bootstrap() {
  // Create the NestJS application instance
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow frontend requests from different origin
  app.enableCors({
    origin: 'http://localhost:4200', // Angular development server
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Set global prefix for all routes (optional)
  app.setGlobalPrefix('api');

  // Start the server on port 3000
  const port = 3000;
  await app.listen(port);
  
  console.log(`🚀 Backend server is running on: http://localhost:${port}/api`);
  console.log(`📊 Incidents endpoint: http://localhost:${port}/api/incidents`);
}

// Start the application
bootstrap();

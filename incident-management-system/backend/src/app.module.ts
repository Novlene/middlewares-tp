import { Module } from '@nestjs/common';
import { IncidentsModule } from './incidents/incidents.module';

/**
 * AppModule
 * Root module of the application
 * Imports all feature modules
 */
@Module({
  imports: [IncidentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

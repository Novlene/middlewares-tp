import { Module } from '@nestjs/common';
import { IncidentsController } from './incidents.controller';
import { IncidentsService } from './incidents.service';

/**
 * IncidentsModule
 * Encapsulates all incident-related functionality
 * Groups controller and service together
 */
@Module({
  controllers: [IncidentsController],
  providers: [IncidentsService],
})
export class IncidentsModule {}

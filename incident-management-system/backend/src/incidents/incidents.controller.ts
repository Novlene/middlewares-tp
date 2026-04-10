import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { CreateIncidentDto, UpdateIncidentDto } from './dto/incident.dto';
import { Incident } from './incident.interface';

/**
 * IncidentsController
 * Handles HTTP requests related to incidents
 * Defines RESTful API endpoints
 */
@Controller('incidents')
export class IncidentsController {
  constructor(private readonly incidentsService: IncidentsService) {}

  /**
   * GET /incidents
   * Retrieve all incidents
   * @returns Array of all incidents
   */
  @Get()
  findAll(): Incident[] {
    return this.incidentsService.findAll();
  }

  /**
   * GET /incidents/:id
   * Retrieve a single incident by ID
   * @param id - The incident ID (parsed from URL parameter)
   * @returns The incident object
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Incident {
    return this.incidentsService.findOne(id);
  }

  /**
   * POST /incidents
   * Create a new incident
   * @param createIncidentDto - The incident data from request body
   * @returns The created incident
   */
  @Post()
  create(@Body() createIncidentDto: CreateIncidentDto): Incident {
    return this.incidentsService.create(createIncidentDto);
  }

  /**
   * PUT /incidents/:id
   * Update an existing incident
   * @param id - The incident ID to update
   * @param updateIncidentDto - The updated data from request body
   * @returns The updated incident
   */
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateIncidentDto: UpdateIncidentDto,
  ): Incident {
    return this.incidentsService.update(id, updateIncidentDto);
  }

  /**
   * DELETE /incidents/:id
   * Delete an incident
   * @param id - The incident ID to delete
   * @returns Success message
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): { message: string } {
    this.incidentsService.remove(id);
    return { message: `Incident with ID ${id} deleted successfully` };
  }
}

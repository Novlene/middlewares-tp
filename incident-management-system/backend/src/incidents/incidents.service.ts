import { Injectable, NotFoundException } from '@nestjs/common';
import { Incident, IncidentStatus } from './incident.interface';
import { CreateIncidentDto, UpdateIncidentDto } from './dto/incident.dto';

/**
 * IncidentsService
 * Contains the business logic for managing incidents
 * Uses an in-memory array to store incidents (no database)
 */
@Injectable()
export class IncidentsService {
  // In-memory storage for incidents
  private incidents: Incident[] = [
    {
      id: 1,
      title: 'Server Down',
      description: 'Main application server is not responding',
      status: IncidentStatus.OPEN,
    },
    {
      id: 2,
      title: 'Database Connection Issue',
      description: 'Unable to connect to production database',
      status: IncidentStatus.IN_PROGRESS,
    },
    {
      id: 3,
      title: 'API Rate Limit Exceeded',
      description: 'Third-party API rate limit reached',
      status: IncidentStatus.RESOLVED,
    },
  ];

  // Counter for generating unique IDs
  private nextId = 4;

  /**
   * Get all incidents
   * @returns Array of all incidents
   */
  findAll(): Incident[] {
    return this.incidents;
  }

  /**
   * Get a single incident by ID
   * @param id - The incident ID
   * @returns The incident object
   * @throws NotFoundException if incident not found
   */
  findOne(id: number): Incident {
    const incident = this.incidents.find((inc) => inc.id === id);
    if (!incident) {
      throw new NotFoundException(`Incident with ID ${id} not found`);
    }
    return incident;
  }

  /**
   * Create a new incident
   * @param createIncidentDto - Data for the new incident
   * @returns The created incident
   */
  create(createIncidentDto: CreateIncidentDto): Incident {
    const newIncident: Incident = {
      id: this.nextId++,
      ...createIncidentDto,
    };
    this.incidents.push(newIncident);
    return newIncident;
  }

  /**
   * Update an existing incident
   * @param id - The incident ID to update
   * @param updateIncidentDto - The updated data
   * @returns The updated incident
   * @throws NotFoundException if incident not found
   */
  update(id: number, updateIncidentDto: UpdateIncidentDto): Incident {
    const incidentIndex = this.incidents.findIndex((inc) => inc.id === id);
    if (incidentIndex === -1) {
      throw new NotFoundException(`Incident with ID ${id} not found`);
    }

    // Merge the existing incident with the update data
    this.incidents[incidentIndex] = {
      ...this.incidents[incidentIndex],
      ...updateIncidentDto,
    };

    return this.incidents[incidentIndex];
  }

  /**
   * Delete an incident
   * @param id - The incident ID to delete
   * @throws NotFoundException if incident not found
   */
  remove(id: number): void {
    const incidentIndex = this.incidents.findIndex((inc) => inc.id === id);
    if (incidentIndex === -1) {
      throw new NotFoundException(`Incident with ID ${id} not found`);
    }
    this.incidents.splice(incidentIndex, 1);
  }
}

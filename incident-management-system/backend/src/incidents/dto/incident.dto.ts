import { IncidentStatus } from './incident.interface';

/**
 * CreateIncidentDto
 * Data Transfer Object for creating a new incident
 * Validates the data received from the client
 */
export class CreateIncidentDto {
  title: string;
  description: string;
  status: IncidentStatus;
}

/**
 * UpdateIncidentDto
 * Data Transfer Object for updating an existing incident
 * All fields are optional to allow partial updates
 */
export class UpdateIncidentDto {
  title?: string;
  description?: string;
  status?: IncidentStatus;
}

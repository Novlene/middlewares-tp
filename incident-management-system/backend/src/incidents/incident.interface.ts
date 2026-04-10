/**
 * Incident Interface
 * Defines the structure of an incident object
 */
export interface Incident {
  id: number;
  title: string;
  description: string;
  status: IncidentStatus;
}

/**
 * Incident Status Enum
 * Defines the possible states of an incident
 */
export enum IncidentStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
}

/**
 * Incident Model
 * Matches the backend interface structure
 */
export interface Incident {
  id?: number;
  title: string;
  description: string;
  status: IncidentStatus;
}

/**
 * Incident Status Enum
 * Possible states for an incident
 */
export enum IncidentStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
}

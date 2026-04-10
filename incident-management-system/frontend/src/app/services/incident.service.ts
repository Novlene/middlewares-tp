import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from '../models/incident.model';

/**
 * IncidentService
 * Handles all HTTP communication with the backend API
 * Provides methods for CRUD operations
 */
@Injectable({
  providedIn: 'root', // Service available application-wide
})
export class IncidentService {
  // Backend API base URL
  private apiUrl = 'http://localhost:3000/api/incidents';

  /**
   * Constructor
   * @param http - Angular HttpClient for making HTTP requests
   */
  constructor(private http: HttpClient) {}

  /**
   * Get all incidents from the backend
   * @returns Observable of Incident array
   */
  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.apiUrl);
  }

  /**
   * Get a single incident by ID
   * @param id - The incident ID
   * @returns Observable of Incident
   */
  getIncident(id: number): Observable<Incident> {
    return this.http.get<Incident>(`${this.apiUrl}/${id}`);
  }

  /**
   * Create a new incident
   * @param incident - The incident data to create
   * @returns Observable of the created Incident
   */
  createIncident(incident: Incident): Observable<Incident> {
    return this.http.post<Incident>(this.apiUrl, incident);
  }

  /**
   * Update an existing incident
   * @param id - The incident ID to update
   * @param incident - The updated incident data
   * @returns Observable of the updated Incident
   */
  updateIncident(id: number, incident: Partial<Incident>): Observable<Incident> {
    return this.http.put<Incident>(`${this.apiUrl}/${id}`, incident);
  }

  /**
   * Delete an incident
   * @param id - The incident ID to delete
   * @returns Observable of the delete response
   */
  deleteIncident(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

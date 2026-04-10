import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IncidentService } from '../../services/incident.service';
import { Incident } from '../../models/incident.model';

/**
 * IncidentListComponent
 * Displays a list of all incidents
 * Allows users to view, edit status, and delete incidents
 */
@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css'],
})
export class IncidentListComponent implements OnInit {
  // Array to store incidents
  incidents: Incident[] = [];

  // Loading state
  isLoading = true;

  // Error message
  errorMessage = '';

  /**
   * Constructor
   * @param incidentService - Injected service for API calls
   */
  constructor(private incidentService: IncidentService) {}

  /**
   * OnInit lifecycle hook
   * Loads incidents when component initializes
   */
  ngOnInit(): void {
    this.loadIncidents();
  }

  /**
   * Load all incidents from the backend
   */
  loadIncidents(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.incidentService.getIncidents().subscribe({
      next: (data) => {
        this.incidents = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading incidents:', error);
        this.errorMessage = 'Failed to load incidents. Please try again.';
        this.isLoading = false;
      },
    });
  }

  /**
   * Delete an incident
   * @param id - The incident ID to delete
   */
  deleteIncident(id: number | undefined): void {
    if (!id) return;

    // Confirm before deleting
    if (confirm('Are you sure you want to delete this incident?')) {
      this.incidentService.deleteIncident(id).subscribe({
        next: () => {
          // Remove from local array
          this.incidents = this.incidents.filter((inc) => inc.id !== id);
          alert('Incident deleted successfully!');
        },
        error: (error) => {
          console.error('Error deleting incident:', error);
          alert('Failed to delete incident. Please try again.');
        },
      });
    }
  }

  /**
   * Update incident status
   * @param incident - The incident to update
   * @param newStatus - The new status value
   */
  updateStatus(incident: Incident, newStatus: string): void {
    if (!incident.id) return;

    this.incidentService
      .updateIncident(incident.id, { status: newStatus as any })
      .subscribe({
        next: (updatedIncident) => {
          // Update local array
          const index = this.incidents.findIndex(
            (inc) => inc.id === incident.id
          );
          if (index !== -1) {
            this.incidents[index] = updatedIncident;
          }
          alert('Status updated successfully!');
        },
        error: (error) => {
          console.error('Error updating status:', error);
          alert('Failed to update status. Please try again.');
        },
      });
  }

  /**
   * Get CSS class based on incident status
   * @param status - The incident status
   * @returns CSS class name
   */
  getStatusClass(status: string): string {
    switch (status) {
      case 'OPEN':
        return 'status-open';
      case 'IN_PROGRESS':
        return 'status-in-progress';
      case 'RESOLVED':
        return 'status-resolved';
      case 'CLOSED':
        return 'status-closed';
      default:
        return '';
    }
  }
}

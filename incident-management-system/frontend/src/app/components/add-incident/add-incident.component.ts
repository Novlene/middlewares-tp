import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IncidentService } from '../../services/incident.service';
import { IncidentStatus } from '../../models/incident.model';

/**
 * AddIncidentComponent
 * Form for creating a new incident
 * Uses reactive forms for better control and validation
 */
@Component({
  selector: 'app-add-incident',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css'],
})
export class AddIncidentComponent {
  // Reactive form group
  incidentForm: FormGroup;

  // Form submission state
  isSubmitting = false;

  // Error message
  errorMessage = '';

  // Available status options for dropdown
  statusOptions = [
    { value: IncidentStatus.OPEN, label: 'Open' },
    { value: IncidentStatus.IN_PROGRESS, label: 'In Progress' },
    { value: IncidentStatus.RESOLVED, label: 'Resolved' },
    { value: IncidentStatus.CLOSED, label: 'Closed' },
  ];

  /**
   * Constructor
   * @param fb - FormBuilder for creating reactive forms
   * @param incidentService - Service for API calls
   * @param router - Router for navigation
   */
  constructor(
    private fb: FormBuilder,
    private incidentService: IncidentService,
    private router: Router
  ) {
    // Initialize the form with validation rules
    this.incidentForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      status: [IncidentStatus.OPEN, Validators.required],
    });
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    // Check if form is valid
    if (this.incidentForm.invalid) {
      // Mark all fields as touched to show validation errors
      this.incidentForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    // Get form values
    const incidentData = this.incidentForm.value;

    // Call the service to create incident
    this.incidentService.createIncident(incidentData).subscribe({
      next: (response) => {
        console.log('Incident created successfully:', response);
        alert('Incident created successfully!');
        // Navigate back to list page
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creating incident:', error);
        this.errorMessage = 'Failed to create incident. Please try again.';
        this.isSubmitting = false;
      },
    });
  }

  /**
   * Reset the form
   */
  resetForm(): void {
    this.incidentForm.reset({
      status: IncidentStatus.OPEN,
    });
    this.errorMessage = '';
  }

  /**
   * Check if a field has errors and was touched
   * @param fieldName - Name of the form field
   * @returns true if field is invalid and touched
   */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.incidentForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  /**
   * Get error message for a field
   * @param fieldName - Name of the form field
   * @returns Error message string
   */
  getErrorMessage(fieldName: string): string {
    const field = this.incidentForm.get(fieldName);
    if (!field) return '';

    if (field.hasError('required')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }

    if (field.hasError('minlength')) {
      const minLength = field.getError('minlength').requiredLength;
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${minLength} characters`;
    }

    return '';
  }
}

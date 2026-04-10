import { Routes } from '@angular/router';
import { IncidentListComponent } from './components/incident-list/incident-list.component';
import { AddIncidentComponent } from './components/add-incident/add-incident.component';

/**
 * Application Routes
 * Defines the navigation paths for the application
 */
export const routes: Routes = [
  {
    path: '',
    component: IncidentListComponent,
    title: 'Incident List',
  },
  {
    path: 'add',
    component: AddIncidentComponent,
    title: 'Add Incident',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

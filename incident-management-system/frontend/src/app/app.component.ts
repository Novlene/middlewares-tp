import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * AppComponent
 * Root component of the application
 * Contains the router outlet for displaying routed components
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Incident Management System';
}

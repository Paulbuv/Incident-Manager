import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncidentListComponent } from './components/incident-list/incident-list.component'
import { IncidentFormComponent } from './components/incident-form/incident-form.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IncidentListComponent,
    IncidentFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Incident-Manager';
}
import { Injectable } from '@angular/core';
import { Incident } from '../models/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private incidents: Incident[] = [
    {
      id: 1,
      title: 'Broken door in warehouse',
      description: 'The main warehouse door is stuck.',
      priority: 'High',
      status: 'Open'
    },
    {
      id: 2,
      title: 'Missing labels on boxes',
      description: '',
      priority: 'Medium',
      status: 'Closed'
    },
    {
      id: 3,
      title: 'Coffee machine not working',
      description: 'Break room coffee machine shows an error.',
      priority: 'Low',
      status: 'Open'
    }
  ];

  getIncidents(): Incident[] {
    return this.incidents;
  }

  addIncident(incident: Incident): void {
    this.incidents.push({ ...incident, id: this.incidents.length + 1, status: 'Open' });
  }

  closeIncident(id: number): void {
    const incident = this.incidents.find(i => i.id === id);
    if (incident) {
      incident.status = 'Closed';
    }
  }
}
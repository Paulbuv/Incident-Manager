import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident';
import { IncidentService } from '../../services/incident.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  incidents: Incident[] = [];

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.incidents = this.incidentService.getIncidents();
  }

  closeIncident(id: number): void {
    this.incidentService.closeIncident(id);
  }
}
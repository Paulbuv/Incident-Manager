import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentService } from '../../services/incident.service';
import { Incident } from '../../models/incident';
import { CommonModule } from '@angular/common';

@Component({
  selector:       'app-incident-form',
  templateUrl:    './incident-form.component.html',
  standalone :    true,
  imports : [
    ReactiveFormsModule,
    CommonModule
  ],
  styleUrls:      ['./incident-form.component.css']
})
export class IncidentFormComponent {
  incidentForm: FormGroup;

  constructor(private fb: FormBuilder, private incidentService: IncidentService) {
    this.incidentForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['Low', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.incidentForm.valid) {
      const newIncident: Incident = {
        ...this.incidentForm.value,
        id: 0, // Will be defined in the service
        status: 'Open' as 'Open'
      };
      this.incidentService.addIncident(newIncident);
      this.incidentForm.reset({ priority: 'Low' });
    }
  }
}
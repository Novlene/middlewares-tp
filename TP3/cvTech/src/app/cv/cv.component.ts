import { Component, signal } from '@angular/core';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';

interface Cv {
  id: number;
  name: string;
  firstname: string;
  age: number;
  cin: string;
  job: string;
  path?: string;
}

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailComponent],
  template: `
    <div class="row">
      <div class="col-md-6">
        <app-liste (selectCv)="selected.set($event)" />
      </div>
      <div class="col-md-6">
        <h4>Détail du CV</h4>
        <app-detail [cv]="selected()" />
      </div>
    </div>
  `,
})
export class CvComponent {
  selected = signal<Cv | null>(null);
}
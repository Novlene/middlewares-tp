import { Component, input } from '@angular/core';

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
  selector: 'app-detail',
  standalone: true,
  template: `
    @if (cv(); as c) {
      <div class="card p-3">
        <h4>{{ c.firstname }} {{ c.name }}</h4>
        <p>Âge : {{ c.age }}</p>
        <p>CIN : {{ c.cin }}</p>
        <p>Poste : {{ c.job }}</p>
      </div>
    } @else {
      <p>Sélectionnez un CV</p>
    }
  `,
})
export class DetailComponent {
  cv = input<Cv | null>(null); 
}
import { Component, signal, output } from '@angular/core';

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
  selector: 'app-liste',
  standalone: true,
  template: `
    <h4>Liste des CVs</h4>
    <div class="list-group">
      @for (cv of cvs(); track cv.id) {
        <button
          class="list-group-item list-group-item-action"
          (click)="onSelect(cv)"
        >
          {{ cv.firstname }} {{ cv.name }}
        </button>
      }
    </div>
  `,
})
export class ListeComponent {
  cvs = signal<Cv[]>([
    { id: 1, name: 'Doe', firstname: 'John', age: 30, cin: '123A', job: 'Développeur' },
    { id: 2, name: 'Smith', firstname: 'Jane', age: 28, cin: '456B', job: 'Designer' },
    { id: 3, name: 'Dupont', firstname: 'Pierre', age: 35, cin: '789C', job: 'Chef de projet' },
  ]);

  selectCv = output<Cv>();

  onSelect(cv: Cv): void {
    this.selectCv.emit(cv);
  }
}
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-business-card',
  standalone: true,
  template: `
    <div class="row">
      <!-- Formulaire : saisie des données -->
      <div class="col-md-6">
        <h3>Données de la carte</h3>
        <div class="mb-3">
          <label class="form-label">Prénom</label>
          <input
            #firstnameInput
            type="text"
            class="form-control"
            (input)="firstname.set(firstnameInput.value)"
            [value]="firstname()"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Nom</label>
          <input
            #lastnameInput
            type="text"
            class="form-control"
            (input)="lastname.set(lastnameInput.value)"
            [value]="lastname()"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Poste</label>
          <input
            #jobInput
            type="text"
            class="form-control"
            (input)="job.set(jobInput.value)"
            [value]="job()"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            #emailInput
            type="email"
            class="form-control"
            (input)="email.set(emailInput.value)"
            [value]="email()"
          />
        </div>
      </div>

      <!-- Aperçu : carte de visite -->
      <div class="col-md-6">
        <h3>Aperçu</h3>
        <div class="card p-4 shadow" style="max-width: 300px;">
          <h5 class="card-title">{{ firstname() }} {{ lastname() }}</h5>
          <p class="card-text"><strong>{{ job() }}</strong></p>
          <p class="card-text">{{ email() }}</p>
        </div>
      </div>
    </div>
  `,
})
export class BusinessCardComponent {
  firstname = signal<string>('');
  lastname = signal<string>('');
  job = signal<string>('');
  email = signal<string>('');
}
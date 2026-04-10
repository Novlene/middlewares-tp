import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ttc-calculator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Calculateur TTC avec remises</h3>

    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <label class="form-label">Prix unitaire HT (€)</label>
        <input
          #priceInput
          type="number"
          class="form-control"
          (input)="price.set(+priceInput.value || 0)"
          [value]="price()"
        />
      </div>
      <div class="col-md-4">
        <label class="form-label">Quantité</label>
        <input
          #qtyInput
          type="number"
          min="1"
          class="form-control"
          (input)="quantity.set(+qtyInput.value || 1)"
          [value]="quantity()"
        />
      </div>
      <div class="col-md-4">
        <label class="form-label">TVA (%)</label>
        <input
          #tvaInput
          type="number"
          class="form-control"
          (input)="tva.set(+tvaInput.value || 18)"
          [value]="tva()"
        />
      </div>
    </div>

    <div class="p-3 bg-light rounded">
      <p>Prix HT total : {{ totalHt() | number:'1.2-2' }} €</p>
      <p>Remise appliquée : {{ remisePercent() }} %</p>
      <p>Prix après remise : {{ prixApresRemise() | number:'1.2-2' }} €</p>
      <h5 class="mt-2">Prix TTC : <strong>{{ ttc() | number:'1.2-2' }} €</strong></h5>
    </div>
  `,
})
export class TtcCalculatorComponent {
 
  price = signal<number>(0);
  quantity = signal<number>(1);
  tva = signal<number>(18);

 
  totalHt = computed(() => this.price() * this.quantity());

  
  remisePercent = computed(() => {
    const q = this.quantity();
    if (q >= 10 && q <= 15) return 20;
    if (q > 15) return 30;
    return 0;
  });

  
  prixApresRemise = computed(() => {
    const ht = this.totalHt();
    const remise = this.remisePercent() / 100;
    return ht * (1 - remise);
  });

  ttc = computed(() => {
    const htRemise = this.prixApresRemise();
    const tauxTva = this.tva() / 100;
    return htRemise * (1 + tauxTva);
  });
}
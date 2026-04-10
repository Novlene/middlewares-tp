import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  template: `
    <div class="mb-3">
      <label>Entrez une couleur :</label>
      <input
        #colorInput
        type="text"
        class="form-control"
        (input)="updateColor(colorInput.value)"
        [value]="currentColor()"
      />
    </div>
    <div class="p-4 rounded border" [style.backgroundColor]="currentColor() || 'white'">
      Zone colorée
    </div>
    <button class="btn btn-secondary mt-3" (click)="reset()">
      Réinitialiser
    </button>
  `,
  styles: [`.border { border: 1px solid #ccc; }`]
})
export class ColorPickerComponent {
  private readonly defaultColor = 'white';
  currentColor = signal<string>('');

  updateColor(value: string): void {
    this.currentColor.set(value.trim()); 
  }

  reset(): void {
    this.currentColor.set(this.defaultColor);
  }
}
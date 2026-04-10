
import { Component } from '@angular/core';

import { ColorPickerComponent } from './color-picker/color-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ColorPickerComponent],
  template: `<app-color-picker />`
})
export class AppComponent {}

/*EX3
import { BusinessCardComponent } from './business-card/business-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BusinessCardComponent],
  template: `<app-business-card />`,
})
export class AppComponent {}*/

/*EX5
import { TtcCalculatorComponent } from './ttc-calculator/ttc-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TtcCalculatorComponent],
  template: `<app-ttc-calculator />`
})
  export class AppComponent {}*/

/*EX7-10
import { CvComponent } from './cv/cv.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CvComponent],
  template: `<app-cv />`
})
  export class AppComponent {}*/
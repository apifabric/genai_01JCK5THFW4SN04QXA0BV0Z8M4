import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CpuLog-card.component.html',
  styleUrls: ['./CpuLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CpuLog-card]': 'true'
  }
})

export class CpuLogCardComponent {


}
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FileLog-card.component.html',
  styleUrls: ['./FileLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FileLog-card]': 'true'
  }
})

export class FileLogCardComponent {


}
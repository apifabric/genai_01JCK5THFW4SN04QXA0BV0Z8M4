import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FileUpload-card.component.html',
  styleUrls: ['./FileUpload-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FileUpload-card]': 'true'
  }
})

export class FileUploadCardComponent {


}
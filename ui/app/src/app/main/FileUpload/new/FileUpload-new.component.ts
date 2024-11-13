import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'FileUpload-new',
  templateUrl: './FileUpload-new.component.html',
  styleUrls: ['./FileUpload-new.component.scss']
})
export class FileUploadNewComponent {
  @ViewChild("FileUploadForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}
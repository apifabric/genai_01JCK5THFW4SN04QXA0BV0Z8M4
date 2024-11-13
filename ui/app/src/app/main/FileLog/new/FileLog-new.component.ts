import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'FileLog-new',
  templateUrl: './FileLog-new.component.html',
  styleUrls: ['./FileLog-new.component.scss']
})
export class FileLogNewComponent {
  @ViewChild("FileLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}
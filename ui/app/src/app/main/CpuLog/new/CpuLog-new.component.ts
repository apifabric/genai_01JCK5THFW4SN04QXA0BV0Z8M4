import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CpuLog-new',
  templateUrl: './CpuLog-new.component.html',
  styleUrls: ['./CpuLog-new.component.scss']
})
export class CpuLogNewComponent {
  @ViewChild("CpuLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CPULOG_MODULE_DECLARATIONS, CpuLogRoutingModule} from  './CpuLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CpuLogRoutingModule
  ],
  declarations: CPULOG_MODULE_DECLARATIONS,
  exports: CPULOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CpuLogModule { }
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FILEUPLOAD_MODULE_DECLARATIONS, FileUploadRoutingModule} from  './FileUpload-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FileUploadRoutingModule
  ],
  declarations: FILEUPLOAD_MODULE_DECLARATIONS,
  exports: FILEUPLOAD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileUploadModule { }